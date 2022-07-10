               //OBJECT DESTUCTING
//1
//8, 1846

//2
//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//3
// your name is alejandro and you like purple
// your name is melissa and you like green 
// your name is undefined and you like green

               //ARRAY DESTRUCTING
//1 
//maya, marisa, chi

//2
//"raindrops on roses"
//"whiskers on kittens"
//["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//3
//[10,30,20]


//es2015
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const {a,b} = obj.numbers

//2
[arr[0], arr[1]] = [arr[1], arr[0]]




raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})