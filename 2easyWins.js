// template literals
let firstName = "katie"
let hairColor = "brunette"
let literalString =  `say hi to ${firstName}, she is a ${hairColor}`
console.log(literalString)

// tagged templates
// tagged templates give us the ability to package up HTML and pre-process it in very useful ways!
let line1 = "twas a rainy day"
let line2 = "then the sun came out"
let line3 = "then it rained again..."
let lines = [line1, line2, line3]

function buildHTML(tags, lines){
    // first arg is the string, second is th expression
    // console.log(tags)
    // console.log(lines)
    const newHTML = lines.map(function(line){
        return `${tags[0]}${line}${tags[1]}`
    })
    return newHTML
}

const result = buildHTML`<li>${lines}</li>`
console.log(result)

// however, you can't plop an array in the DOM... so...
function buildHTML2(tags, lines) {
    return function(element){
        const newHTML2 = lines.map(function(line){
            return `${tags[0]}${line}${tags[1]}`
        })
        const finalHTML = newHTML2.join('')
        document.querySelector(element).innerHTML += finalHTML
    }
}
// you can also CALL A FUNCTION from WITHIN A TEMPLATE LITERAL! But, there are some wierd rules. see Rob's video...
 
// FUNCTION updates: default and the rest operator...
// default: allows you to pass in a 'default value' with an argument in the case it is NOT passed =========
// in at a later time! ex---->
function getArea(x, y, s = 'r'){
    if(s === 'r'){
        return x*y;
    }else if(s === 't'){
        return (x*y) / 2;
    }
}

const rectArea = getArea(2, 5)
// because s is set with a 'default value' of 'r', we do NOT need to pass it in here,
// unless it is different!
// console.log(rectArea)


// REST operator: ("give me the rest") ===================================================================
// what if we want to find the highest number, but NOT in an array, rather, within arguments handed to a function??
// we can use the 'arguments' object (native to JS!) it's 'array like', and can be parsed thru by index, tho it's 'awkward'
function findHighest(upperLimit, ...numList){
    let max = 0;
    // for (let i = 1; i < arguments.length; i++){
    //     if((arguments[i] < upperLimit) && (arguments[i] > max)){
    //         max = arguments[i]
    //     }
    // }
    // return max;
    numList.filter(function(n){
        if((n < upperLimit) && (n > max)){
            max = n
        }
    })
    return max
}  

const highest = findHighest(80, 99, 88, 77, 88, 87,67, 56)
// console.log(highest)

// the ... REST operator turns the numbers(or whatever args) after the first (aka 'upperLimit' 
// in this case) into an ACTUAL array that can be treated as such (so quicker and less awkward!)
// if it could talk it would say: " I don't know how many vars you are seding so I'll put whatever else you send in a array"
function sum(...numberList){
    return numberList.reduce(
        function(total, num){
            return total+num
        }
    )
}
const restWay = sum(1,2,3,4,5)
console.log(restWay)

// SPREAD SYNTAX! (closely related to rest operator, tho also its opposite!) =============================
// if it could talk it would say: "My stuff is already an array!, you've got spearate params, unpack it!"

function sum2(x, y){
    return x + y
}

const uglyWay = sum2(2)
// console.log(uglyWay) (returns NaN)

const numz = [1,2,3,4,5]
const uglierWay = sum2(numz)
// console.log(uglierWay) (returns the array and 'undefined')

const spreadWay = sum(...numz);
console.log(spreadWay)

// SPREAD with objects!
function aReducer(state, action){
    let newState = {...state};
    newState.newProperty = action.payload
    return newState
}
const currState = {
    a: 1,
    b: 2,
    c: 3
}

action = {
    type:"done",
    payload: 30
}
aReducer(currState, action)

// Spread syntax is also a way to make objects from constructors. EX)
function Ball(radius, x, y){
    this.r = radius;
    this.x = x;
    this.y = y;
}

let ballArgs = [50, 100, 100]

const aBall = new Ball(...ballArgs)
console.log(aBall)

// another ex of using spread syntx
const numberSet = [3,33,44,55,66,77];
console.log(Math.min(...numberSet))

// drop multiple elements into an array
const others = ['a', 'b', 'c']
const myArray = [1,2,3,4, ...others, 6,7,8]
console.log(myArray)


// arrow function synax (ie ROCKET!)
myArray.map((elem, i)=>{
    console.log(elem)
})
// arrow function syntax is especially helpful for anonymous functions;
// and it allows for the elimination of the wor "function"!

// Object literals
// 3 primary ways of making an object:
let objX = new Object()
//or
let objY = Object.create(null)
//or
let objZ = {}
// the above method is an object literal!

// updates to the object literal: 
let exObject = {
    name: "katie",
    career: "unknown",
    language: "JS"
}

let name = exObject.name
let career = exObject.career

let newObject = {
    // name: name,
    // career: career
    name,
    career
}
// BUT!!! if the key and the value are the SAME, you can define them as such. SEE ABOVE!

// DESTRUCTURING!
const someJSON = {
    vote_count: 541,
    id: 4607,
    video: false,
    vote_avg: 5.9,
    title: "Olaf's Frozen Adventure",
    genre_ids: [
        12,16,35,14,10751
    ]
}

// const title = someJSON.title
// const id = someJSON.id
// const video = someJSON.video

const { title, id, video } = someJSON;

//this gives variable definitions AS THEY MAP to different proporties that match their name in someJSON
//much faster than the several lines of code as required above!
console.log(title, id, video)

// const { title: movieTitle } = someJSON;
// you can also change the variable names using destructuring, as seen above

processData({
    title,
    id,
    video
})

//but this is a SMALL jSON object... what happens when it gets really big!?

function processData(data) {
    const { title, id, video } = data
    console.log(`${title} has an id of ${id} and has video ${video}`)
    //so you can see here how you can set up a function to handle that data by using destructuring,
    // and then doing something with said data!
}

function processData2({ title, id, video }){
    console.log(`${title} has an id of ${id} and has video ${video}`)
}
// the above syntax takes out the need to declare variables at all, by passing a destructured
// object as the arguments, JS will parse through those and assign them to variables as needed! 
// (ie, MAPPING property names to varibale names)

// what about destructuring nested objects?!
const { genre_ids: {[0]: firstGenre, [1]: secondGenre} } = someJSON
console.log(firstGenre)

// we can also use destructing to use named params in a function (the order doesn't matter, but the 
// names MUST BE THE SAME! otherwise it doesn't work!)
function getArea({width, height}){
    console.log(width * height)
}

getArea({width: 70, height: 30})

// we can also destrcture arrays!
const [first, second, third] = someJSON.genre_ids
console.log(first)
const [,,,fourth, fifth] = someJSON.genre_ids
console.log(fourth)

// using rest operator and destructuring together
const [,two,...otherz] = someJSON.genre_ids
console.log(otherz)

// example of a most common use!
function userProfile(userData){
    const {name, address} = userData
}

function bestUserProfile({name, address}){

}


