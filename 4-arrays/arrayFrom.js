// Array.from

// this is meant for iterables, and JS will make an array out of it! very helpful for HTML collections,
// strings, etc. object.assign is similar (but for objects)

const nameArray = Array.from(`Pippi Longstocking`)
// console.log(nameArray)

let weather = "it's warm and sunny!"
let energy = "i'm a little tired..."
let goals = "mostly on track today."

// let today = Array.from([weather, energy, goals])
// console.log(today)

// but this is not so exciting, you can do more! you can pass it a SECOND ARGUMENT!
// the first argument is whatever you want to become an array, the second is an expresion.
// it's a function,  works like map, whatever it returns getting added to the new array

let today = Array.from([weather, energy, goals], (piece)=>{
    return `<li>${piece}</li>`
})

// console.log(today)

let numbers = Array.from([2,3,4], (num)=>num+num);
console.log(numbers)