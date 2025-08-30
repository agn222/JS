
// {} this is scope

if (true){
    let a = 10
const b =20
var c = 30

}



// console.log(a);
// console.log(b)
console.log(c) // var c is accessible outside scope
// whereas let and const are not accessible outside scope{}

function one (){
    const username = "Atharva"
    function two()
    {
        const website = "youtube"
        console.log(username);

    }  
//   console.log(website) // wrbsite is not accessible as it is out of scope
two()
}
one()

