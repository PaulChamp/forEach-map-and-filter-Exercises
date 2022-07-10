//java notes
//3-11
let tvShow = 'catdog';
tvShow.indexOf('cat');
//0
//-1 means that it doesnt exist
"baseball".slice(4);
//ball
"superhero".slice(5,7);
//he
// only caqn replace the first instance
const age = "5" + "4";
//54
pecan pie[7];
//i
"PUP"[3];
//undefined
let song = "london calling";
song.toUpperCase();
//"LONDONG CALLING"
//song = london calling
let userInput = "   TODD@gmail.com";
let cleanInput = userInput.trim().toLowerCase();
//todd@gmail.com
let park = 'Yellowstone';
const index = park.indexOf('Stone');
//-1 bc capital matters
let yell = 'GO AWAY!!';
let index - yell.indexOf('!');
//7
'GARBAGE!'.slice(2).replace("B",'');
//RAGE!
'he said I ain\'t happy'
//he said I ain't happy
`woooop`
//"woooop"
`${1+5}`
//6
let username = PaulChamp;
`Welcome back ${username}`
//Welcome Back PaulChamp
let animal = "pig";
let sound = "oink";
`${animal} says ${sound}!`
//pig says oink!
let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
`You bought ${quantity} ${item}, total price: $${price*quantity}`;
//"You bought 4 cucumbers, total price: $7.96"
//null is intentional absence of any value -- it must be assigned -- it has a value of nothing
//underfined are variables that do not have assigned value -- usually dont set something to be undefined -- seen ofen
//math starts with an upercase M
Math.random()
//returns a decimal less than 1
typeof 99
//number
typeof true
//boolean
//typeof does not need ()

//A list of comparison operators
//=== strict equality
//== equality
//!== strict inequality
//!= not equal
//< less than
//<= less than or equal to
//> greater than
//>= greater than or equal to
//Be careful when using relational operators (i.e. less than, greater than, etc) on things that aren’t numbers!
-2 > 5
//false
2 >= 2
//true
//use === 99% of the time compared to ==
