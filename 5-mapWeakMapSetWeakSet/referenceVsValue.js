// value and reference
// primitives and objects

// primitive: string, number, boolean, null, undefined, symbol
// primitives are stored by VALUE
let string = 'popeye';
let name = string; // we have copied the VALUE of string ('popeye')
string = 'olive oil'
console.log(name) // still 'popeye', because string and name have nothing to do with eachother after line 7; 
//not the case with objects!

// objects: arrays, objects, functions
// objects are stored by REFERENCE (it points to the space in memory where the value is)
let obj = {
    name: 'popeye'
}

let cartoon = obj;
// here, we're not making a copy of the value of obj, we're copying what's 'in' obj, in that place in memory
cartoon.girlfriend = 'olive oil'
// even though i didn't change 'obj', 'cartoon' points to (references) the SAME spot in memory
// so NOW, both have a .girlfriend property
console.log(obj)
console.log(cartoon)