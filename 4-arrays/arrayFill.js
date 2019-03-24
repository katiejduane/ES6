// Array.prototype.fill()

const arr1 = [2,4,5,"a", 16,9,9]

// three arguments must go into fill():
// 1. value you want to fill in
// 2. starting index for that value
// 3. stopping index

arr1.fill("b", 3, 6)
console.log(arr1)
// this MUTATES the array! .slice() is NOT mutating, and will take out a chunk of an array and returns it
// if you put a NEGATIVE value, it starts from the end!

arr1.fill("c", -3, -1)
console.log(arr1)

// similar to SPLICE
let discountMonths = ['jan', 'feb', 'april', 'nov']
// 3 args like fill!
// 1. where to start
// 2. how many to delete
// 3. what to insert
discountMonths.splice(3, 0, "aug")
console.log(discountMonths)
// also mutating