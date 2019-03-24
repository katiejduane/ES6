// for...of ----------------------------->

const array = [1,2,3,10,11,12]

// basic for loop
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// for...in (MORE HELPFUL FOR OBJECTS THAN ARRAYS!)
for(let key in array){
    console.log(key)
    console.log(array[key])
}

const obj = {
    name: 'rob',
    occ: 'teacher',
    lang: 'js'
}

for(let key in obj){
    console.log(key)
    //prints the key
    console.log(obj[key])
    //prints the value of key
}

// forEach
array.forEach((value, i)=>{
    // console.log("value: ", value)
    // console.log("index: ", i)
})

// map is similar to forEach but pushes items onto a NEW array as it loops through the current array
const newArray = array.map((item)=>{
    return item
})
// console.log("mapped array: ", newArray)

// for...of, finally!
for(let value of array){
    console.log(value)
}

// what's REALLY the differenc between these two?
for (let key in array) {
    console.log(key)
    console.log(array[key])
}

for (let value of array) {
    console.log(value)
}

// the difference is is that...
// - FOR...IN iterates over the KEYS of the iterators
// - FOR...OF iterators over the VALUES; no access to the keys

const string = `Robert Bunch`
for(let letter of string){
    console.log(letter)
}

console.log(array)