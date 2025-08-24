const name = "atharva"
const age = 18

// console.log(name + age)

// console.log(`Hello my name is ${name} and my age is ${age}`)
 let myName = "Atharva"

//  console.log(myName.toUpperCase())
//   console.log(myName.charAt(5))
//    console.log(myName.indexOf('a'))

const newString = myName.substring(0,6)
const anotherString = myName.slice(0,6)
console.log(newString)
console.log(anotherString)

let oneString = "     atharva"
console.log(oneString)
console.log(oneString.trim()) // removes spaces from the string 
 
const url = "https://atharva.com/atharva%50naik"
console.log(url.replace('%50', '-'))
console.log(url.includes('atharva'))