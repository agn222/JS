// Primitive
// 7 types
// string, number, boolean, null, undefined, Symbol, bigint

// const { useLayoutEffect } = require("react");


// Refrence Types or Non Primitive
// Array, Objects, Functions 


//********************Stack & Heap************************ 

// let atharva = "gian";

// atharva = "nobita"

// console.log(atharva);

let athu = {
    nav :"gian",
    age : "20",
    height : "180"


}
let amit = athu;
athu.nav = "nobita"

console.log(athu.nav);
console.log(amit.nav)



