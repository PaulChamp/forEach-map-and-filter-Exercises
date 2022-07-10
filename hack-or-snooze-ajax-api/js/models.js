"use strict";

const BASE_URL = "https://hack-or-snooze-v3.herokuapp.com";

/******************************************************************************
 * Story: a single story in the system
 */

class Story{

  /** Make instance of Story from data object about story:
   *   - {title, author, url, username, storyId, createdAt}
   */

  constructor({ storyId, title, author, url, username, createdAt }) {
    this.storyId = storyId;
    this.title = title;
    this.author = author;
    this.url = url;
    this.username = username;
    this.createdAt = createdAt;
  }

  /** Parses hostname out of URL and returns it. */

  getHostName() {
    // UNIMPLEMENTED: complete this function!
    return new URL(this.url).host;
  }
}


/******************************************************************************
 * List of Story instances: used by UI to show story lists in DOM.
 */

class StoryList {
  constructor(stories) {
    this.stories = stories;
  }

  /** Generate a new StoryList. It:
   *
   *  - calls the API
   *  - builds an array of Story instances
   *  - makes a single StoryList instance out of that
   *  - returns the StoryList instance.
   */

  static async getStories() {
    // Note presence of `static` keyword: this indicates that getStories is
    //  **not** an instance method. Rather, it is a method that is called on the
    //  class directly. Why doesn't it make sense for getStories to be an
    //  instance method?

    // query the /stories endpoint (no auth required)
    const response = await axios({
      url: `${BASE_URL}/stories`,
      method: "GET",
    });

    // turn plain old story objects from API into instances of Story class
    const stories = response.data.stories.map(story => new Story(story));

    // build an instance of our own class using the new array of stories
    return new StoryList(stories);
  }

  /** Adds story data to API, makes a Story instance, adds it to story list.
   * - user - the current instance of User who will post the story
   * - obj of {title, author, url}
   *
   * Returns the new Story instance
   */

  async addStory( user, newStory ) {
    const response = await axios ({
      method: "POST",
      url:    `${BASE_URL}/stories`,
      data: {
          // request body
          // this is the format specified by the API
          token:  user.loginToken,
          story:  newStory,
      }
  });

  // make a Story instance out of the story object we get back
  newStory = new Story(response.data.story);
  // add the story to the beginning of the list
  this.stories.unshift(newStory);
  // add the story to the beginning of the user's list
  user.ownStories.unshift(newStory);

  return newStory;
}

async deleteStory(user, idToRemove){
  //Delete request for story 
  const result = await axios.delete(`${BASE_URL}/stories/${idToRemove}`, { data: {
    token: user.loginToken
  }});
  const deletedStory = new Story(result.data.story);

  //remove it from this list 
  let storyListIdxToRemove = this.stories.findIndex(story => story.storyId === deletedStory.storyId);
  this.stories.splice(storyListIdxToRemove, 1);

  //remove it from current users ownStories
  let ownStoriesIdxToRemove = user.ownStories.findIndex(story => story.storyId === deletedStory.storyId);
  user.ownStories.splice(ownStoriesIdxToRemove, 1);

  
  return deletedStory;
}
}


/******************************************************************************
 * User: a user in the system (only used to represent the current user)
 */

class User {
  /** Make user instance from obj of user data and a token:
   *   - {username, name, createdAt, favorites[], ownStories[]}
   *   - token
   */

   constructor({
    username,
    name,
    createdAt,
    favorites = [],
    ownStories = []
  },
  token) {
this.username = username;
this.name = name;
this.createdAt = createdAt;

// instantiate Story instances for the user's favorites and ownStories
this.favorites = favorites.map(s => new Story(s));
this.ownStories = ownStories.map(s => new Story(s));

// store the login token on the user so it's easy to find for API calls.
this.loginToken = token;
  }

  /** Register new user in API, make User instance & return it.
   *
   * - username: a new username
   * - password: a new password
   * - name: the user's full name
   */

  static async signup(username, password, name) {
    const response = await axios.post(`${BASE_URL}/signup`, {
      user: {
           username,
           password,
           name,
      }
   });
   
   // build a new User instance from the API response
   const newUser = new User(response.data.user);

   // attach the token to the newUser instance for convenience
   newUser.loginToken = response.data.token;

   return newUser;
}

  /** Login in user with API, make User instance & return it.

   * - username: an existing user's username
   * - password: an existing user's password
   */

  static async login(username, password) {
    const response = await axios.post(`${BASE_URL}/login`, {
      user: {
          username,
          password,
      }
  });

  // build a new user instance from the API response
  const existingUser = new User(response.data.user);

  // Instanciate story instances for the user's favorites and ownStories
  existingUser.favorites = response.data.user.favorites.map(s => new Story(s));
  existingUser.ownStories = response.data.user.stories.map(s => new Story(s));

  // Attach the token to the newUser instance for convenience
  existingUser.loginToken = response.data.token;
  
  return existingUser;
}

  /** When we already have credentials (token & username) for a user,
   *   we can log them in automatically. This function does that.
   */

  static async loginViaStoredCredentials(token, username) {
    // if we don't have user info, return null
    if (!token || !username) return null;

    // call the API
    const response = await axios.get(`${BASE_URL}/users/${username}`,{
        params: {token}
    });

    // instantiate the user from the API information
    const existingUser = new User(response.data.user);

    // attach the token to the newUser instance for convenience
    existingUser.loginToken = token;

    // instantiate Story instances for the user's favorite and ownStories
    existingUser.favorites = response.data.user.favorites.map(s => new Story(s));
    existingUser.ownStories = response.data.user.stories.map(s => new Story(s));
    
    return existingUser;
  }
  async retriveDetails() {
    const response = await axios.get(`${BASE_URL}/users/${this.username}`, {
        params: {
            token: this.loginToken
        }
    });

    // update all of the user's properties from the API response
    this.name = response.data.user.name;
    this.createdAt = response.data.user.createdAt;
    this.updatedAt = response.data.user.updatedAt;

    // remember to convert the user's favorites and ownStories into instances of Story
    this.favorites = response.data.user.favorites.map(s => new Story(s));
    this.ownStories = response.data.user.stories.map(s => new Story(s));

    return this;
}

/**
 * Add a story to the list of user favorites and update the API
 * - storyId: an ID of a story to add to favorites
 */

 addFavorite(storyId) {
     return this._toggleFavorite(storyId, "POST");
 }
/**
 * Remove a story to the list of user favorites and update the API 
 * - storyId: an ID of a story to remove from favorites
 */

 removeFavorite(storyId) {
     return this._toggleFavorite(storyId, "DELETE");
 }

/**
 * A helper method to either POST or DELETE to the API
 * - storyId: an ID of a story to remove from favorites
 * - httpVerb: POST or DELETE based on adding or removing
 */

async _toggleFavorite(storyId, httpVerb) {
 await axios({
     url: `${BASE_URL}/users/${this.username}/favorites/${storyId}`,
     method: httpVerb,
     data: {
         token: this.loginToken
         }
     });

     await this.retriveDetails();
     return this;
}

 /**
  * Send a PATCH request to the API in order to update the user
  * - userData: the user properties you want to update
  */

async update(userData) {
const response = await axios({
        url: `${BASE_URL}/users/${this.username}`,
        method: "PATCH",
        data: {
            user: userData,
            token: this.loginToken
          }
      });

      // "name" is really the only property you can update
      this.name = response.data.user.name;

      // Note: you can also update "password" but we're not storing it
      return this;
}

/**
 * Send a DELETE request to the API in order to remove the user
 */

async remove() {
     // this function is really just a wrapper around axios
    await axios({
        url:  `${BASE_URL}/users/${this.username}`,
        method: "DELETE",
        data: {
            token: this.loginToken
        }
    });
}
}    
/**
* Class to represent a single Story
*/

class StoryObj {
 /**
  * The constructor is designed to take an object for better readability / flexibility
  * - storyObj - an object that has properties in it.
  */

constructor(storyObj) {
      this.author = storyObj.author;
      this.title =  storyObj.title;
      this.storyId =  storyObj.storyId;
      this.url   =  storyObj.url;
      this.username = storyObj.username;
      this.createdAt = storyObj.createdAt;
      this.updatedAt = storyObj.updatedAt;
}

/**
 * Make a PATCH request against/ stories/{storyId} to update a single story
 * - user: an instance of User
 * - storyData: an object containing the properties you want to update
 */

async update(user, storyData) {
     const response = await axios({
         url: `${BASE_URL}/stories/${this.storyId}`,
         method: "PATCH",
         data: {
             token: user.loginToken,
             story: storyData
         }
     });

     const { author, title, url, updatedAt } = response.data.story;

     // these are the only fields that you can change with a PATCH update
     // so we don't need to worry about updating the others
     this.author = author;
     this.title = title;
     this.url = url;
     this.updatedAt = updatedAt;

     return this;
  }
}

