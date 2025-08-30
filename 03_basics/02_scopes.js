
// {} this is scope

// const { use } = require("react")

if (true){
    let a = 10
const b =20
var c = 30

}



// console.log(a);
// console.log(b)
// console.log(c) // var c is accessible outside scope
// whereas let and const are not accessible outside scope{}

function one (){
    const username = "Atharva"
    function two()
    {
        const website = "youtube"
        // console.log(username);

    }  
//   console.log(website) // wrbsite is not accessible as it is out of scope
two()
}
one()


if(true){
    const username= "atharva"
    if(username==="atharva"){
        const website = "youtube"
        // console.log(username + website)

    }
    // console.log(website)
}

// console.log(username)


// *******************************interesting*********************

function AddOne(num)
{
    return num+1
}
console.log (AddOne(5))

const addTwo = function(num){
    return num+2
}

console.log(addTwo(1))