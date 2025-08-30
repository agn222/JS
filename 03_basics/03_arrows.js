const user ={
    username : "atharva",
    price : 1000,

    // welcomeMessage : function(){
    //     console.log(` ${this.username}, welcome to website`)
    //     console.log(this)
    // }
}

// user.welcomeMessage()  // method
// user.username = "sam"
// user.welcomeMessage() 
// console.log(this)




// function chai (){
//     let username = "atharva"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "atharva"
//     console.log(this.username)
// }
// chai()
const chai = () =>{              // arrow fucntion
    let username = "atharva"
    console.log(this)
}
chai()

//arrow fucntion

// const addTwo = (num1, num2) => {
//     return num1+ num2  // explicit return
// }

// console.log(addTwo(5,5))

//implicit return 

// const addTwo = (num1, num2) => ( num1+ num2) // implicit return

const addTwo = (num1, num2) => ( {username : "atharva"})


console.log(addTwo(5,5))
