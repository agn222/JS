// Primitive
// 7 types
// string, number, boolean, null, undefined, Symbol, bigint

// const { useLayoutEffect } = require("react");


// Refrence Types or Non Primitive
// Array, Objects, Functions 


//********************Stack & Heap************************ 

let atharva = "gian"; // here primitive datatype string is used hence data is stored in stack 
// stack 
niv = atharva
atharva = "nobita" // here i made changes in atharva, but niv did not change as in stack, whenever the data is accessed a copy is made and no changes happen to ooriginal data

console.log(atharva);
console.log(niv);
let athu = {
    nav :"gian",
    age : "20",
    height : "180"


}
let amit = athu;
athu.nav = "nobita"

console.log(athu.nav);
console.log(amit.nav)
// whereas in heap where non primitve data types like arrays are stored, no copy is madr and when changes occur the original data will be also modified