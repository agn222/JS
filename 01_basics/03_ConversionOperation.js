let score = 33 // this is a number

console.log(typeof score)
// console.log(typeof(score))

let stringscore = "33a" //this is a string

console.log(typeof stringscore)
// console.log(typeof(stringscore))

let valueInString = Number(stringscore)// converting a string into number
console.log(typeof valueInString)
console.log(valueInString) // not a number (33a)

//converting
// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//converting following into boolean

// "" => false
// "atharva" => true

let someNumbr = 66
let stringNumber = String(someNumbr)

console.log(stringNumber)
console.log(typeof stringNumber)