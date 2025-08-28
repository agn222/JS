////array

const myArray = [0 , 1 , 2, 3]
console.log(myArray[0])
//shallow copy share same refrence 
//deep copy does not share same refrence

//Array Methods

myArray.push(6) // 6 is added as the n-1 th element
console.log(myArray)

myArray.pop() // removes last element from arrray
console.log(myArray)

myArray.unshift(9) // 9 is inserted as first element
console.log(myArray)

myArray.shift() // removes first element from array

console.log(myArray)

console.log(myArray.includes(1)) // checks if 1 is there in array

console.log(myArray.indexOf(2)) // tell me index of element 2

const newArray = myArray.join() // converts array into string
console.log(newArray)


// slice
console.log("A" ,myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1)
console.log("B", myArray)
// splice
console.log("A" ,myArray)

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("B", myArray)
// splice modifies original array and includes "to" range
// slice doesnot modify originak array and does not includes the "to" range