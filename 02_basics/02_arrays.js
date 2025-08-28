const tmkoc_heros =["Jethalal", "Tarak", "Bhide"]
const tmkoc_mahila = ['Daya', "Anjali", 'Babita']

// tmkoc_heros.push(tmkoc_mahila) // push does not create new array, just adds the 2nd array as the last elemrnt in the old array, saves in the first array, here tmkoc_heros

// console.log(tmkoc_heros)
// console.log(tmkoc_heros[3][1]) 

const allHeros = tmkoc_heros.concat(tmkoc_mahila) // concat creates a new array where both the 2 old array are completely merged

// console.log(allHeros)
// console.log(allHeros[3])

// Spread

// const allNewHeros = [...tmkoc_heros, ...tmkoc_mahila]

// console.log(allNewHeros)
// spread is similar to concat 
const rand_array = [1,2,4,[1,4,5],[5,7,8,4,5]]
const modified_randarray = rand_array.flat(Infinity) // simplifies arrays
console.log(modified_randarray)

console.log(Array.isArray("Atharva"))
console.log(Array.from("Atharva")) // converts string into array

console.log(Array.isArray({name :"Atharva"}))// interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // makes an array


