// Array.of()
// creates a new array with variable number of arguments

const arr1 = Array.of(7)
console.log(arr1)
// returns an array with the number 7 in it

// in constrast with:
const arr2 = Array(7)
// console.log(arr2)
// returns an array with 7 empty indices

const arr3 = Array.of(7, "Hulk", true, {name: 'Boris'})
console.log(arr3)
const arr3B = Array(7, "Hulk", true, { name: 'Boris' })
console.log(arr3B)
// but in this case, they work the same!

// Polyfill
if(!Array.of){
    Array.of = function(){
        return Array.prototype.slice.call(arguments)
    }
}