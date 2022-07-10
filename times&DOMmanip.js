//countdown exercise
function countdown(time){
    let timer = setInterval(function(){
        time--;
        if(time <= 0){
            clearInterval(timer);
            console.log("BOOOM");
        }
        else{
            console.log(time);
        }
    },1000)
}
//random game exrecise
function randomGame(){
    let num;
    const tries = 0;
    const timer = setInterval(function() {
        num = Math.random();
        times++
        if(num > .75) {
            clearInterval(timer);
            console.log("it took " + tries + "tries");
        }
    },1000)
}

// DOM MANIP
// capitalization matters when using document.getElementbyId -> only elements w/ that ID
// document.getElementsByTagName = all matches
// documents.getElementsByClassName -> only elements with that class
// document.querySelector -> returns 1st element that matches
// documents.querySelectorAll -> same but with all matches

// always use camelCase for style changing -> h1.style.backgroundColor = 'blue'

//to change multiple elements u need to loop
// const listItems = document.querySelectorAll('li');
// for(let listItem of listItems){
//     listItem.style.color = "red"; //upadate each property of each element one line at a time
// }



function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}
// const h1 = document.querySelector('h1');

// setInterval(function(){
//     h1.style.color = randomRGB();
// }, 1000)

const letters = document.querySelectorAll('.letter');

setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB();
    }
}, 1000)

//.value can change the value of the attribute
//.setAtribute changes the atribute
//.className += ' oisdhf' adds class to origonal class (not the best option)

//classList gives array like list(not actually an array)
//classList.add('new') adds another class
//classList.remove('new') removes class
//classList.toggle('new') turns class on and off

//.append() puts a tag inside another one (like<b> inside of <li>)
//.prepend() goes before 1st child --- .append goes last
//.remove() removes element

//.parentElemnt shows you what the parent is
//.children gives collection of children within element
//.firstElementChild gives first child
//.lastElementChild gives last child

//everything in the DOM is a node but not every node is an element

//.addEventListener('event',function(){})

document.addEventListener('mousemove', function(e){
    // console.log(e.pageX, e.pageY);
    const r = Math.round(e.pageX * 255 / window.innerWidth);
    const b = Math.round(e.pageY * 255 / window.innerHeight);
    // console.log(r, 0, b);
    const color = `rgb(0, ${r}, ${b})`;
    document.body.style.backgroundColor = color;
    // console.log(color);
    // rgb(0,0,0)
});

//logo exercise
const form = document.querySelector('#logoform')
const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results')

form.addEventListener('submit', function(f){
    f.preventDefault();
    const newLogo = makeLogo(brandInput.value, colorInput.value, fontSizeInput.value);
    results.appendChild(newLogo);
});

function makeLogo(text,color,size){
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + 'px';
    return logo;
}