//{1,2,3,4}

//"ref"

//{Array(3) => true}
//{Array(3) => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length

function isVowel(char){
    return "aeiou".includes(char);
}
function vowelCount(string){
    const mapVowel = new Map();
    for(let char of string){
        let lowerCased = char.toLowerCase();
        if(isVowel(lowerCased)){
            if(mapVowel.has(lowerCased)){
                mapVowel.set(lowerCased, mapVowel.get(lowerCased) +1 );
            } else {
                mapVowel.set(lowerCased, 1);
            }
        }
    }
    return mapVowel;
}