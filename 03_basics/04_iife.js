//Immediately Invoked Function Expression (IIFE)

// function chai (){
//     console.log(`db connected`)
// }

// chai()

// using iife
(function chai (){ // named IIFE
    console.log(`db connected`)
}) ();  // semicolon between two IIFE 

//(funciton definition) (function call )
( 
    (name)/* parameter*/ => {
        console.log(`DB CONNECTED ${name}`);

    })("atharva")

