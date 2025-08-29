

//singleton
Object.create


//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Atharva",
    "full name" : "Atharva gajanan naik",
    age : 20,
    [mySym] : "mykey",
    location : "Mumbai",
    email : "atharvagnaik@gmail.com",
    isLogginIN : true,
    lastLoginDays : ["Monday", "Tuesday"]
    }
// console.log(JsUser.email) // prints email
// console.log(JsUser["email"])  // prints email
// console.log(JsUser[mySym]) // prints symbol mykey

JsUser.email = "atharvagnaik@google.com"
// console.log(JsUser) // now email changes 
Object.freeze(JsUser)

JsUser.email = "atharvagnaik@gpt.com" // email would not be modified
// console.log(JsUser)

JsUser.greeting = function()
{
     return "HELLO JS USER";
}
JsUser.greetingTwo = function()
{
    return `HELLO JS USER ,${this.name}`;}

console.log(JsUser.greeting);
 onsole.log(JsUser.greetingTwo);