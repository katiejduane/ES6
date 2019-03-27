// java hashmap --> javascript map

// what is a hashmap?
// think of it as key-value pairing, with a one-to-one relationship, with a key
// pointing to exactly one value, and vice-versa. in a hashmap, things are optimized
// for GETTING/UPDATING ('putting') data

// a Map is just a key-value pair, but it's FAR MORE PROTECTED than is a regular object.
// it also coms with some cool methods specific to map! It is also an iterable; it maintains its order!


let myContacts = new Map();
myContacts.set("Rob", "555-1234"); // set method
const rob = myContacts.get("Rob"); // get method
//works VERY MUCH like LOCAL STORAGE
// console.log(rob)

let keyFunction = () => {
    console.log('hello, world');
}

myContacts.set(keyFunction, "haha, i just used a function as a key")
const huh = myContacts.get(keyFunction);
//you could NEVER set a function as a key in a regular object
// console.log(huh)

// it's iterable! see-->
// for (value of myContacts) {
//     console.log(myContacts)
// }

// MAP METHODS!
// console.log(myContacts.size) // the size property
// // myContacts.clear() // clears the entire map!
// console.log(myContacts.entries()) // loops through and prints all entries!
// myContacts.forEach((value)=>{ // not exactly the same as an array.forEach(), but similar!
//     console.log(value)
// })
// console.log(myContacts.keys()) // grabs all the keys!
// console.log(myContacts.values()) // grabs all the values!


// WEAK MAP VS. MAP!
// 1. a weak map will allow garbage collection if the key has no reference
// 2. a weak map is not an iterable, and only has get, set, has, and delete methods/properties

let weakMap = new WeakMap();
let friend = {friend: "bill"};
weakMap.set(friend, 'best friend');
// console.log(weakMap.get(friend))

friend = null;
// console.log(weakMap.get(friend))
// because the reference to the key is gone, it's considered a weak refernece, and the weakmap will
// release that value, and that key-value relationship will be removed from the map. in a regular (strong)
// map, you can't force garbage collection and declare a key as 'null', it won't go anywhere unless 
// you delete it explicitly


// the SET constructor!
// a set is very similar to an array except it's not an array, and so does not have the protoype 
// methods. it can also hold any data type. the MAIN kicker here is that ALL ELEMENTS ARE UNIQUE. 
// there cannot be more than one of anything! Sets ARE iterable (insertion order).

let employeeId = new Set(['a12', 'e7', 'c2', 'a12'])
console.log(employeeId) // returns ONLY 3 items because 'a12' can ONLY BE ENTERED ONCE!

let employeeSet = new Set()

employeeSet.add({
    name: 'Jane',
    position: 'CTO',
    tenure: '12 years'
})

// SET methods--->
//.size //like .length() in array
//.clear() //empties the entire set
//.delete //a particular element
//.entries //like Map it returns an iterable, each element in the iterable is an array, [0]key = value
//.forEach
//.has //allows you to check for the presence of an element
//.keys //to get every key
//.values //to get every value!


// WEAKSET vs SET
// unlike regualr sets, WeakSet can only hold objects! the primary gain is garbage collection. 
// uses weak references (not strong references); so if you eliminate the references to an object,
// the object is also eliminated.
// it is NOT iterable, it has no get method,a nd the size is always 0

let harry = {
    name: 'harry',
    id: 12
}

let sherry = {
    name: 'sherry',
    id: 13
}

let employeeIds = new WeakSet()
    employeeIds.add(harry);
    employeeIds.add(sherry);

    // helpful when yo uhave you objects you want to flag them as being a part of a group of data
