
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