// template literals
let firstName = "katie"
let hairColor = "brunette"
let literalString = `say hi to ${firstName}, she is a ${hairColor}`
console.log(literalString)

// tagged templates
// tagged templates give us the ability to package up HTML and pre-process it in very useful ways!
let line1 = "twas a rainy day"
let line2 = "then the sun came out"
let line3 = "then it rained again..."
let lines = [line1, line2, line3]

function buildHTML(tags, lines) {
    // first arg is the string, second is th expression
    // console.log(tags)
    // console.log(lines)
    const newHTML = lines.map(function (line) {
        return `${tags[0]}${line}${tags[1]}`
    })
    return newHTML
}

const result = buildHTML`<li>${lines}</li>`
console.log(result)

// however, you can't plop an array in the DOM... so...
function buildHTML2(tags, lines) {
    return function (element) {
        const newHTML2 = lines.map(function (line) {
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
function getArea(x, y, s = 'r') {
    if (s === 'r') {
        return x * y;
    } else if (s === 't') {
        return (x * y) / 2;
    }
}

const rectArea = getArea(2, 5)
// because s is set with a 'default value' of 'r', we do NOT need to pass it in here,
// unless it is different!
// console.log(rectArea)