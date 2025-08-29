function sayMyName() 
{console.log("H"); // data inside {} is function definition
console.log("I");
console.log("J");
console.log("K");
console.log("L");
console.log("M");}

sayMyName() // sayMyName is function reference


// function addTwoNumbers(number1, number2) // (number1, number2) are parameters
// {
//     console.log(number1 + number2)
// }
 
// addTwoNumbers(5,5) // (5,5) are arguments

// another method (better)

function addTwoNumbers(number1,number2)
{
    return number1 + number2
}

const result = addTwoNumbers(5,5)
// console.log("Result", result)


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username")
    return
}

    return `${username} just Logged In`
}
console.log(loginUserMessage("atharva"))