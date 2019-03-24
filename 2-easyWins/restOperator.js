// REST operator: ("give me the rest") ===================================================================
// what if we want to find the highest number, but NOT in an array, rather, within arguments handed to a function??
// we can use the 'arguments' object (native to JS!) it's 'array like', and can be parsed thru by index, tho it's 'awkward'
function findHighest(upperLimit, ...numList) {
    let max = 0;
    // for (let i = 1; i < arguments.length; i++){
    //     if((arguments[i] < upperLimit) && (arguments[i] > max)){
    //         max = arguments[i]
    //     }
    // }
    // return max;
    numList.filter(function (n) {
        if ((n < upperLimit) && (n > max)) {
            max = n
        }
    })
    return max
}

const highest = findHighest(80, 99, 88, 77, 88, 87, 67, 56)
// console.log(highest)

// the ... REST operator turns the numbers(or whatever args) after the first (aka 'upperLimit' 
// in this case) into an ACTUAL array that can be treated as such (so quicker and less awkward!)
// if it could talk it would say: " I don't know how many vars you are seding so I'll put whatever else you send in a array"
function sum(...numberList) {
    return numberList.reduce(
        function (total, num) {
            return total + num
        }
    )
}
const restWay = sum(1, 2, 3, 4, 5)
console.log(restWay)