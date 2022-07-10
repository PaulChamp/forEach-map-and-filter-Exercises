// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];
const JURL = `http://jservice.io/api`;
const questionCount = 5;
const categoryCount = 6;

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */
class Category {
static async getCategoryIds() {
    let response = await axios.get(`${JURL}/categories`, {

        params: {
            count: "100",
            offset: Math.floor(Math.random() * (500 - 1) + 1) //random # to vary offset between each request
        }
    });
    console.log(response)

//Lodash selects 6 random categories
let randomCategory = _.sampleSize(response.data, categoryCount)

//make a new array with only category IDs
let categoryIds = randomCategory.map((catObj) => {
    return catObj.id;
});
return categoryIds;
}

static async getAllCategroiesAndQuestions() {
    categories = [];
    let categoryIds = await Category.getCategoryIds();
    for (let categoryId of categoryIds) {
        let fullCategory = await Category.getCategory(categoryId);
        categories.push(fullCategory);
    }
    return categories;
}


/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

 static async getCategory(catId) {
    let response = await axios.get(`${JURL}/clues`, {
      params: {
        category: catId
      }
    });
    // Lodash selects 5 random questions
    let selectFiveQuestions = _.sampleSize(response.data, questionCount);

    // format each question object inside array
    let questionArray = selectFiveQuestions.map((question) => {
      //
      if (question.answer.startsWith('<i>')) {
        question.answer = question.answer.slice(3, -3);
      }
      return {
        question: question.question,
        answer: question.answer,
        showing: null
      }
    });

    let categoryQuestions = {
      title: response.data[0].category.title, // get category title from 'response'
      clues: questionArray
    }
    return categoryQuestions;
    }
}
/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */
const $button = $("button");
const $tDiv = $("#table-container");
  // for formatting category titles
  function toTitleCase(str) {
    let lcStr = str.toLowerCase();
    return lcStr.replace(/(?:^|\s)\w/g, (match) => {
        return match.toUpperCase();
    });
  }
  
async function fillTable() {
    let $tHead = $("<thead>");
    let $tBody = $("<tbody>");
    let $table = $("<table>")
    .prepend($tHead).append($tBody);


//GENERATE each table cell with '?', add coordinate ID, append to row - row to tbody
for (let i = 0; i< questionCount; i++) {
    let $tRow = $("<tr>");
    for (let k = 0; k < categoryCount; k++) {
        let $qMark = $("<i>").attr("class", "Q-circle");
        let $tCell = $("<td>").attr("id", `${k}-${i}`).append($qMark);
        $tRow.append($tCell);
}
    $tBody.append($tRow);
}

//create header cells, applt castegory title - appeand to T-head
for(let j = 0; j < categoryCount; j++) {
    let $tCell = $("<th>")
    .attr("id", `cat-${j}`).text(toTitleCase(categories[j].title));
    $tHead.append($tCell)
}
$tDiv.append($table);
}
/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(e) {
    let $clickedCell = $(`#${e}`);
    let category = e.slice(0, 1);
    let question = e.slice(2);

    // shorthand variables for game data
    let theCell = categories[category].clues[question];
    let theQuestion = theCell.question;
    let theAnswer = theCell.answer;

    // check clicked question for what .showing is
    if (theCell.showing === null) { // show the question
      $clickedCell.text(theQuestion);
      theCell.showing = "question";
    }
    else if (theCell.showing === "question") { // show the answer
      $clickedCell.toggleClass("answer")
      $clickedCell.text(theAnswer);
      theCell.showing = "answer";
      $clickedCell.toggleClass("not-allowed");
    }
  }

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    $button.text("Loading...").toggleClass("not-allowed");
    $tDiv.empty(); //clears gameboard
    let $loading = ("<li>");
    $tDiv.append($loading);
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $button.text("Reset!").toggleClass("not-allowed");
    $tDiv.empty() //clear loading icon before table arrives
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    showLoadingView(); //start load screen
    await Category.getAllCategroiesAndQuestions(); //call API and format data
    hideLoadingView(); //hide load screen
    fillTable(); // creates table
    addListener(); //applies listener to table
}

/** On click of start / restart button, set up game. */

// TODO
    $button.on("click", async => {
        setupAndStart();
    });
/** On page load, add event handler for clicking clues */
    async function addListener() {
        const $gameTable = $("table");
        $gameTable.on("click", "td", (e) => {
            handleClick(e.target.id);
        });
    }

// TODO
