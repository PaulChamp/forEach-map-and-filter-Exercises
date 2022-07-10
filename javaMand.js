 //funtion practice on hackerrank
 function fizzBuzz(n) {
    for(let n = 1; n <= 15; n++)
    if (((n % 5) === 0) && ((n % 3) === 0 )) {
        console.log("FizzBuzz");
    }
    else if(n % 3 ===0){
        console.log("Fizz");
    }
    else if(n % 5 ===0){
        console.log("Buzz");
    }
    else{
        console.log(n);
    }
}

//function practice on springboard
//challenge one
function isValidPassword(user, pass){
  if(pass.length < 8){
    return 'false1';
  } 
  else if(pass.indexOf(" ") !== -1){
    return 'false2';
  }
  else if(pass.indexOf(user) !== -1){
    return 'false3';
  }else{
    return true;
  }
}

//challenge two
function avg(arr){
  let total = 0;
  for(let num of arr){
    total += num;
  }
  let result = total / arr.length;
  return result;
}

//challenge three
function pangram(str){
  for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(str.indexOf(char) === -1){
      return false;
    }
  }  
  return true;
}

//optional java practice on hackrranks
//#3
function charAt(str, index) {
  if(index > str.length){
      return [];
  }
  return str[index];
}

//#4
function stringIncludes(str, char) {
  for(let i = str.length -1; i < str.length; i++){
      if(str[i] === char){
      return true;
  }
}
return false
}

//#5
function stringIndexOf(str, char) {
  for(let i=0; i < str.length; i++){
      if(str[i] === char){
          return i;
      }
      i ++;
  }
  return -1;
}

//#6
function stringLastIndexOf(str, char) {
  for(let i = str.length-1; i >= 0; i--) {
      if(str[i] === char)
          return i;
  }
  return -1;
}

//#7
function includes(arr, val) {
  for(let include of arr){
      if(arr[include] === val){
          return true;
      }
  }
  return false;
}

//#8
function indexOf(arr, val) {
  for(let i=arr.length-1; i >= 0; i--){
      if(arr[i] === val){
          return i;
      }
  }
  return -1;
}

//#9
function lastIndexOf(arr, val){
  for(let i=arr.length-1; i >= 0; i--)
    if(arr[i] === val){
      return i;
    }
  
return -1;
}

//#10
function push(arr, val) {
  return arr + ',' + val; 
}

//#11
function pop(arr) {
  return arr && arr.splice(-1)[0];
}

//#12
function unshift(arr, val) {
  return val + ',' + arr;
}

//#13
function shift(arr) {
  return arr.splice(1,2);
}

//#14
function slice(arr, index, len) {
  let result = [];
  let wag = Math.max(index, 0);
  let to = Math.min(len);
  
  if((!len) || (len > arr.length)) {
      for(let i = wag; i<arr.length; i++) {
          result.push(arr[i]);}
      } else {
          for(let i = wag; i<to; i++) {
              result.push(arr[i]);
          }
      }
      return result;
}

//#15
function squareEvenNumbers(arr) {
  let sum = 0;
  for(let i = 0; i <= arr.length; i++){
      if(arr[i] % 2 === 0) {
          sum += Math.pow(arr[i], 2);
      }
  }
  return sum;
}

//#16
function entries(newObj) {
  for(let key in newObj){
      return [key + ',' + newObj[key]];
  }
}

//#17
function countValues(arr, val) {
  if(arr.includes(val)){
      return val;
  }
return 0;
}

//#18
function generatePairs(val) {
  const arr = [];
  for(let i = 0; i <= val; i++){
      for(let x = i; x <= val; x++){
      arr.push([i,x]);
      }
  }
  return arr;
}


//#19
function toQueryString(obj){
  for(let final in obj){
    return (final, obj[final]);
  }
}

console.log({"bar": [ 2,3], "foo": "1"})   //bar=2&bar=3&foo=1



//number one
// function repeat(str, multipler) {
//     return(Array(multipler + 1).join(str));
// }


//number two
function removeFromString(str, index, number) {
    const outputStringArray = str.split('');
    outputStringArray.splice(index, number);
    return outputStringArray.join('');
  }

//number three
function reverse(arr) {
    //arr.reverse();
    const xyz = new Array;
    for(let i = arr.length-1; i >= 0; i--){
    xyz.push(arr[i]);
    }
    return xyz;
}

//number four
function min(arr) {
    const smallest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < smallest){
            return arr[i];   
        }
    }
}

//number 5
function slice(arr, index, len) {
    let result = [];
    const from = Math.max(index, 0);
    const to = Math.min(len);
    
    if((!len) || (len > arr.length)) {
      for(let i = from; i<arr.length; i++) {
      result.push(arr[i]);}
    } else { 
      for(let i = from; i<to; i++) {
      result.push(arr[i]);
      }
    }
    return result;
    }

    //number six
function keys(array) {
        var obj = array;
        let arr = [];
        for (let key in obj){
            arr += key;
        }
        return[arr];
    }

//number seven
function values(obj) {
    var obj = obj;
            const arr = [];
        for (let key in obj){
            for (let value in obj[key]){
                arr.push(obj[key][value]);
        }
        }
        return arr;
}

//number eight
function swapKeyAndValue(obj, swapKey) {
    var obj = obj;
    const newObj = {};
    for(let keys in obj) {
        if (keys === swapKey) {
            newObj [obj[keys]] = swapKey;
        }
        if (keys !== swapKey){
            newObj[keys] = obj[keys];
        }
    }
    return obj(newObj);
}

//number eleveln
function twoHighest(arr) {
    var highest = 0;
    var secondHighest = 0;
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= highest) { 
        secondHighest = highest; 
        highest = arr[i];
      } else if (arr[i] > secondHighest && arr[i] < highest) {
        secondHighest = arr[i];
      }
    }
  
    return [secondHighest, highest];
  }

//number twelve
function minMaxKeyInObject(obj) {
    let keys = Object.keys(obj);
  
    return [Math.min(...keys), Math.max(...keys)];
  }
  


    const city = {
        name: "San Francisco",
        state: "California",
        population: 871000,
        bridges: 2
      };

      for (let key in city) {
        console.log(key, city[key]);
      }


//TSS ONE
function calculateAverage(numbers) {
    let total = 0;
    if(numbers.length === 0){
        return total;
    }
    
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;

}
//TSS TWO
// function dedupe(numbers) {
//     const obj = {};
//     const returnArray = [];
//     for(let i = 0; i < numbers.length; i++) {
//         obj[numbers[i]] = true;
//     }
//     for (let key in obj) {
//         returnArray.push(key);
//     }
//     return returnArray;
// }
function dedupe(numbers) {
  const returnArray = [];
  for (let key of numbers) {
      if(returnArray.includes(key)){
      }else {
        returnArray.push(key)
      }
  }
  return returnArray;
}



//TSS THREE
function isPangram(str) {
    let pangram = str;
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(!pangram.includes(char)) {
            return false;
        }
    }
    return true;
}

//TSS FOUR
function strExpand(str) {
    let obj = {};
    for(let i = 0; i<str.length; i++){
        if (obj[str[i]] === undefined){
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    return obj;
}
function multipleLetterCount(str){
    // str = str.toLowerCase();
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

//MOCK TSS

//NUMBA ONE
function logicalColors(x, y) {
  if (x === true && y === false){
      return "Blue";
  }
  if(x === true){
      return "Red";
  }
  if(y !== true){
      return "Yellow";
  }
      return "Purple";
}

//NUMBA TWO
function max(arr){
  var max = arr[0];
  for(var i=1; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i];   
    }
   }
 return max;
}

//NUMBA THREE
function removeNumbers(str) {
  const noNums = str.replace(/[0-9]/g, '');
  return noNums;
}

//NUMBA FOUR






//TSS TAKE TWO
//PROBLEM ONE
function fizzBuzz(num) {
  for(let i = 1; i <= num; i++){
      if(((num % 5) === 0) && ((num % 3) === 0)){
          return "FizzBuzz";
      }
      else if(num % 3 === 0){
         return "Fizz";
      }
      else if(num % 5 === 0){
          return "Buzz";
      }
      else{
          return num;
      }
  }
}

//PROBLEM TWO
function vowelsOnly(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  for(let none of str) {
      if(vowels.includes(none.toLowerCase())){
          newStr += none
      }
  }
  return newStr
}

//PROBLEM THREE
function isPangram(str) {
  let pangram = str;
  for(let char of 'abcdefghijklmnopqrstuvwxyz'){
      if(pangram.indexOf(char) === -1){
          return false;
      }
  }
  return true;
}

//PROBLEM FOUR
function strExpand(str) {
  let finalObj = {};
  for(let i = 0; i<str.length; i++){
      if(finalObj[str[i]] === undefined){
          finalObj[str[i]] = 1;
      }else {
          finalObj[str[i]]++;
      }
  }
let outStr = "";
for(let letter in finalObj){
  outStr += `${letter}${finalObj[letter]}`;
}
return outStr;
}


try{
  undefined.pop();
} catch(e) {
  console.log("an error")
  console.log(e);

console.log('we made it')
}

const printOne = function() {
  console.log(1);
}
//anon functions are functions that dont have a name and you can call them more than once