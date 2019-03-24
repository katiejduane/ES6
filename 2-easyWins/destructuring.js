// DESTRUCTURING!!!

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


