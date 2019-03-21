// notes and examples from 
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

// .map() (i know pretty well but for review)

// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

// What you need
// [20, 24, 56, 88]

var officersIds = officers.map(function (officer) {
    return officer.id
});

// this is the same but with ROCKET FUNCTION SYNTAX
// const officersIds = officers.map(officer => officer.id);

console.log(officersIds)

// .map() takes 2 arguments, a callback and an optional context 
// (will be considered as this in the callback) which I did not 
// use in the previous example. The callback runs for each value 
// in the array and returns each new value in the resulting array.

//my own example! 

var fruits= [
    { name: "apple", season: "fall" },
    { name: "papaya", season: "summer" },
    { name: "strawberries", season: "spring" },
    { name: "blueberries", season: "late summer" },
    { name: "pear", season: "fall" },
]

const seasonalFruits = fruits.map(function (fruit) {
    return fruit.season
})

console.log(seasonalFruits)


// .reduce()
// Also runs a callback for each element of an array. What’s different 
// here is that reduce passes the result of this callback (the accumulator) 
// from one array element to the other. The accumulator can be pretty much 
// anything (integer, string, object, etc.) and must be instantiated or 
// passed when calling .reduce().

var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

var totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
}, 0);

// the ZERO is the starting value of the accumulator

// rocket function syntax: 
// const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

// .filter() can also be used to look for a particular number (the highest, in this case)
var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

console.log(totalYears)
console.log(mostExpPilot)

// my example

var family = [
    {name: "Hannah", age: 33},
    { name: "Ellen", age: 30 },
    { name: "Mom", age: 64 },
    { name: "Dad", age: 70 },
]

var totalAges = family.reduce(function(accumulator, familyMember){
    return accumulator + familyMember.age
}, 0);

console.log(totalAges)

var youngestMember = family.reduce(function(youngest, familyMember){
    return(youngest.age) < familyMember.age ? youngest : familyMember
}, {})

console.log(youngestMember)


// .filter()
// What if you have an array, but only want some of the elements in it ? 
// That’s where.filter() comes in !

var pilots2 = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels",
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    }
];

var rebels = pilots2.filter(function (pilot) {
    return pilot.faction === "Rebels";
});
var empire = pilots2.filter(function (pilot) {
    return pilot.faction === "Empire";
});

// rocket function syntax!
// const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
// const empire = pilots.filter(pilot => pilot.faction === "Empire");

console.log(rebels)
console.log(empire)

// my example

let horses = [
    {name: 'delilah', color: "palomino"},
    { name: 'pumpkin', color: "chesnut" },
    { name: 'bean', color: "bay" },
    { name: 'creme brulee', color: "palomino" },
    { name: 'brandon', color: "bay" },
]

const palominos = horses.filter(function(horse) {
    return horse.color === "palomino"
})

console.log(palominos)


// COMBINING .map(), .filter(). .reduce()
// Since all three are called on arrays and since .map() and .filter() both return arrays, 
// we can easily chain our calls.

var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

// Our objective: get the total score of force users only. Let’s do it step by step!
// First, we need to filter out the personnel who can’t use the force:
var jediPersonnel = personnel.filter(function (person) {
    return person.isForceUser;
});

console.log(jediPersonnel)

// With that we have 3 elements left in our resulting array.
// We now need to create an array containing the total score of each Jedi.
var jediScores = jediPersonnel.map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
});

// And let’s use reduce to get the total:
var totalJediScore = jediScores.reduce(function (acc, score) {
    return acc + score;
}, 0);

// And now here’s the fun part… we can chain all of this to get what we want in a single line:
var totalJediScore = personnel
    .filter(function (person) {
        return person.isForceUser;
    })
    .map(function (jedi) {
        return jedi.pilotingScore + jedi.shootingScore;
    })
    .reduce(function (acc, score) {
        return acc + score;
    }, 0);


// And look how pretty it is with arrow functions:
const totalJediScore = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);


// Boom! 💥