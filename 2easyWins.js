// template literals and tagged templates

// tagged template challenges

// FUNCTION updates: default and the rest operator...
// default: allows you to pass in a 'default value' with an argument in the case it is NOT passed
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


// REST operator: ("give me the rest")
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
console.log(highest)
// the ... REST operator turns the numbers(or whatever args) after the first (aka 'upperLimit' 
// in this case) into an ACTUAL array that can be treated as such (so quicker and less awkward!)

// SPREAD SYNTAX! (closely related to rest operator)

// object literals and destructuring