const gameContainer = document.getElementById("game");
let firstCard = null;
let scndCard = null;
let cardsFlipped = 0;
let dontClick = false;
let currentScore = 0;
let newScore = 0;

let COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "aliceblue",
  "#5bd4ca",
  "aliceblue",
  "#5bd4ca"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  
  // you can use event.target to see which element was clicked
  if(dontClick) return;
  if(event.target.classList.contains("flipped"))return;


  let bkgColor = event.target;
  bkgColor.style.backgroundColor = bkgColor.classList[0];
  console.log(bkgColor);
  let currentCard = event.target.parentElement;
  if(!firstCard || !scndCard){
    bkgColor.classList.add("flipped");
    if(!currentCard.classList.contains("flipped")){
      setScore(currentScore + 1);
    }
    firstCard = firstCard || bkgColor
    scndCard = bkgColor === firstCard ? null : bkgColor;
  }
  if (firstCard && scndCard){
    dontClick = true;

    if (firstCard.className === scndCard.className) {
      cardsFlipped += 2;
      firstCard.removeEventListener("click", handleCardClick);
      scndCard.removeEventListener("click", handleCardClick);
      firstCard = null;
      scndCard = null;
      dontClick = false;
    } else {
    setTimeout(function() {
        firstCard.style.backgroundColor = "";
        scndCard.style.backgroundColor = "";
        firstCard.classList.remove("flipped");
        scndCard.classList.remove("flipped");
        firstCard = null;
        scndCard = null;
        dontClick = false;
      }, 1000);
    
    }
    
    if (cardsFlipped === COLORS.length) alert("you win!") && stopTime();
  }
  

  // if (cardsFlipped === COLORS.length) alert("you win!") && stopTime();
}

let startBtn = document.getElementById("start");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
let para = document.getElementById("para");
let para1 = document.getElementById("para1");
let bScore = document.getElementById("bestscore");
let totalSeconds = 0;

startBtn.addEventListener("click", startGame);
function startGame(){
  setScore(0);
  console.log("game start")
  para.classList.add("playing");
  para1.classList.add("playing");
  startBtn.classList.add("playing");  
  bScore.classList.add("playing");

  setInterval(setTime, 1000);
  function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }

  function pad(val) {
    const valString = val + "";
    if(valString.length < 2) {
      return "0" + valString;
    }else {
      return valString;
    }
  }
//   let indices = [];
//   for (let i = 1; i <= COLORS / 2; i++) {
//     indices.push(i.toString());
//   }
//   let pairs = shuffle(indices.concat(indices));

//   for (let i = 0; i < gameContainer.length; i++) {
//     let path = "gifs/" + pairs[i] + ".gif";
//     cards[i].children[1].children[0].src = path;
//   }
// }
  } 
  
  function setScore(newScore){
    currentScore == newScore;
    document.getElementById("current-score") === currentScore;
  }

  function endGame() {
    let end = document.getElementById("end");
    let scoreHeader = end.children[1];
    scoreHeader.innerText = "Your score: " + currentScore;
    let lowScore = +localStorage.getItem("low-score") || Infinity;
    if (currentScore < lowScore) {
      scoreHeader.innerText += " - NEW BEST SCORE!!";
      localStorage.setItem("low-score", currentScore);
    }
    document.getElementById("end").classList.add("game-over");
  };
  var clicks = 0;
  function onClick() {
    clicks += 1;
    document.getElementById("clicker").innerHTML = clicks;
  };

// when the DOM loads
createDivsForColors(shuffledColors);