//ES CODE
const filterOdds = (...args) => args.filter(v => v % 2 === 0);

//findMin
const findMin = (...args) => Math.min(...args);

//mergeObjects
const mergeObjects = (arr, ...args) => [...arr, ...args.map(v => v *2)];

//slice&dice
const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj}
    // console.log(newObj)
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}
const update = (obj, key, val) => {
    const newObj = {...obj}
    newObj[key] = val;
    return newObj;
}