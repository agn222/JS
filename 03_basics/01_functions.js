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
// console.log(loginUserMessage("atharva"))

function calculateCarPrice(...num1) ///... is rest or spread operator
{return num1

}
// console.log(calculateCarPrice(100,200,400,500)) // gives array

const user = {
    username : "Atharva",
    price: 200
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    
      
}
// handleObject(user)
handleObject({
    username : "sam",
price : 400})


const NewArray = [200 , 100 ,400]
function returnSecondValue(getArray)
{
    return getArray[1]


}

console.log(returnSecondValue(NewArray))
console.log(returnSecondValue([200 ,400]))