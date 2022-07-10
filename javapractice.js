if (1 === 1) {
    console.log("It's true!");
}
let rating = 1;
if (rating ===3) {
    console.log('You are great');
}
else if (rating ===2) {
    console.log('you are okay');
}
else if (rating ===1) {
    console.log('no good');
}
else {
    console.log('not valid');
}

//example 2
let highScore = 1430;
let userScore = 1500;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log (`Good game. Your score of ${userScore} did not beat the high 
    score of ${highScore}`);
}
let x = 11;

if (x > 10) {
  console.log('x is greater than 10');
}

if (x === 11) {
  console.log('x is equal to 11');

} else {
  console.log('x is less than 10');

}
// order matters for ! && || but () trumps like PEMDAS


let y = Math.random();
if (y > 0.5) {
    console.log('Over 0.5');

} else {
    console.log('y is under 0.5');
    
}

let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //this is an array
rainbow[6] = 'purple'; //this completley changes
rainbow[rainbow.length] = 'black'; //this adds to the end

//push - add to end, pop - remove from end, shift - remove from start, unshift - add to start
rainbow.push('brown'); //can add multiple things they go in order
rainbow.pop(); //dont need content in ()
rainbow.unshift('pink'); //can add multiple things they go in order
rainbow.shift(); //dont need content in ()

//.concat() combines 2 arrays ex: fruits.concat(veggies, meats);

//.includes() tells you if it has something by using true or false

//.indexOf() similar to string.indexOf, it tells u where what youre searching for is

//.reverse() reverses array

//.join() takes array and puts out a string with all elements as one string  

//.slice() takes a portion of array and makes another array with it

//.splice() removes or replaces or adds in elements in an array

//.sort() sorts out array 

const fitBitData = {
    totalSteps: 142891,
    totalMiles: 154.3,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep : '2:13'
};
//all objects turn to strings

//objects exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };

  programming.languages.push('Go');
  programming.difficulty = 7; //since its a number thats all i have to do
  delete programming.jokes;
  programming.isFun = true;
  //end

  for (let i = 1; i <= 100; i += 25) {
    console.log(i, 'loop');
  }
  // for (define varible
  //[initialExpression];
  //[condition];
  //[incrementExpression] )
  const ltbom = [ 'lions', 'tigers', 'bears', 'oh my'];
  for (let a = 0; a < ltbom.length; a++) {
      console.log(a, ltbom[a]);
  }
  //while(some condition)
  //in the loop, update or attrempt to make that condition false

  //loops practice

//from beginwithjava.com


//   for (let q = 0; q <= 10; q++) {
//       console.log(q, 1)
//   }
//   let zee = 0;
//   while (zee <= 10) {
//       console.log(zee, 2);
//       zee++;
//   }
//   for (let w = 0; w<=20; w+=2) {
//       console.log(w, 3)
//   }
//   let s = 1;
//   while (s <= 20) {
//       console.log(s, 4)
//       s+=2;
//   }
//   for (let e = 11; e >= 0; e-=1) {
//       console.log(e, 5)
//   }

function grumpus() {
    console.log('ugh.. you again..');
    console.log('leave me alone!');
}
 for(let i = 0; i <2; i++) {
     grumpus();
 }

function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
console.log(`Rolled: ${roll}`);
}
function throwDice(numRolls){
    for(let i=0; i<numRolls; i++) {
        rollDie();
    }
}
function square(num) {
    console.log(num * num);
}

function divide(a,b) {
    console.log(a / b);
}
//when return is run the function ends, when its executed nothing after runs

// function isPangram(sentence){
//     let lowerCased = sentence.toLowerCase
//     for(let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if(lowerCased.indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// }

// function getCard(){
//     const values = ['2','3','4','5','6','7','8','9','J','Q','K','A'];
//     const valIdx = Math.floor(Math.random() * values.length);
//     const value = values[valIdx];

//     const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
//     const suitIdx = Math.floor(Math.random() * suits.length);
//     const suit = suit[suitIdx];
//    return { value: value, suit: suit};

// }



//function exercise

function diff(o,p) {
    return o - p;
}
function product(x,y) {
    return x * y;
}
function printDay(num){

    let dates = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    };
    return dates[num];
  }
function lastElement(arr){
    return arr[arr.length-1];
}
function numberCompare(x,y){
    if(x > y){
    return 'first is greater!';
    }
    if(x < y){
        return 'second is greater!';
    }
    return 'numbers are equal...';
}
function singleLetterCount(str1,letter){
    let finalCount = 0;
    for(let i =0; i < str1.length; i++){
        if(str1[i].toLowerCase() === letter.toLowerCase()) {
            finalCount++;
        }
    }
    return finalCount;
}
function multipleLetterCount(str){
    str = str.toLowerCase();
    let finalObj = {};
    for(let i =0; i< str.length; i++){
      if (finalObj[str[i]] === undefined){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }
  function arrayManipulator(arr, command, position, val){
      if(command === 'remove'){
          if(position === 'end'){
              return arr.pop();
          }
          return arr.shift();
      }
      else if(command === 'add'){
          if(position === 'end'){
              arr.push(val)
              return arr;
          }
          arr.unshift(val)
          return arr;
      }
  }
  function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  }


  const names = [
    "paul",
    "alex",
    "john",
  ];
  for(let name of names){
console.log("hello" + " " + name);
}
// function people(names){
//   for(let i = names.length-1; i >= 0; i--){
//     console.log("hello" + " " + names[i]);
//   }
// }