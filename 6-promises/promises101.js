// What is a promise?
// - A JS constructor that gives you a few cool methods
// --> .then(), .catch(), All, race // resolve, reject

// A promise constructor takes 1 argument:
// - A callback function!
// -- That callback has two args: 
//       -- resolve, reject (provided by JS, callbacks!)
// Now that we are inside the callback, the code starts running!

let myFirstPromise = new Promise((resolve, reject)=>{
    // console.log('running')
    // async stuff happns here: ajax, axios, http, sql, etc... and when it's ready...
    resolve('a msg from resolve') // i'm done!
    reject('i did not finish :(')  // something went wrong!
    
})

// console.log(myFirstPromise)

// the .then() will go on a promisem OUTSIDE of the promise
// it will keep an eye on the promise, when the RESOLVE callback 
// is run inside of the promise, the .then() will fire of its callback!

// .then() takes one arg, a callback to run!
myFirstPromise.then((promiseData)=>{
    // console.log(promiseData)
})

myFirstPromise.catch((promError)=>{
    // console.log(promError)
})

// console.log('i think i am the last line in the program')

// a slightly more practical application!

function one(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('two seconds has passed...')
        }, 2000)
    })
}

function two(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('one second has passed...')
        }, 1000)
    })
}

const promOne = one();
const promTwo = two();

promOne.then((msgFromPromise)=>{
    console.log('------------1------------')
    console.log(msgFromPromise)
    console.log(promOne)
})

promTwo.then((msgFromPromise) => {
    console.log('------------2------------')
    console.log(msgFromPromise)
    console.log(promTwo)
})

const promiseArray = [promOne, promTwo]
console.log(promiseArray)

// .all method:
// Promise.all takes 1 arg: an array of promises!
// we run .then() just like always, this will wait until of the promises 
// in the array have resolved!

Promise.all(promiseArray).then((data)=>{
    console.log('all the promises are done')
    console.log(data)
})

// .race method:
// Promise.race takes 1 arg: an array of promises, we run .then() like always
// this will run as soon as ANY promise is resolved
Promise.race(promiseArray).then((data) => {
    console.log('promises raced! 1 is done...')
    console.log(data)
})