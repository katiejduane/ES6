// SPREAD SYNTAX! (closely related to rest operator, tho also its opposite!) =============================
// if it could talk it would say: "My stuff is already an array!, you've got spearate params, unpack it!"

function sum2(x, y) {
    return x + y
}

const uglyWay = sum2(2)
// console.log(uglyWay) (returns NaN)

const numz = [1, 2, 3, 4, 5]
const uglierWay = sum2(numz)
// console.log(uglierWay) (returns the array and 'undefined')

const spreadWay = sum(...numz);
console.log(spreadWay)

// SPREAD with objects!
function aReducer(state, action) {
    let newState = { ...state };
    newState.newProperty = action.payload
    return newState
}
const currState = {
    a: 1,
    b: 2,
    c: 3
}

action = {
    type: "done",
    payload: 30
}
aReducer(currState, action)

// Spread syntax is also a way to make objects from constructors. EX)
function Ball(radius, x, y) {
    this.r = radius;
    this.x = x;
    this.y = y;
}

let ballArgs = [50, 100, 100]

const aBall = new Ball(...ballArgs)
console.log(aBall)

// another ex of using spread syntx
const numberSet = [3, 33, 44, 55, 66, 77];
console.log(Math.min(...numberSet))

// drop multiple elements into an array
const others = ['a', 'b', 'c']
const myArray = [1, 2, 3, 4, ...others, 6, 7, 8]
console.log(myArray)
