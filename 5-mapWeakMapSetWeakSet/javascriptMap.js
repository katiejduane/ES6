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

let aWeakMap = new WeakMap();

function updateUsers();

