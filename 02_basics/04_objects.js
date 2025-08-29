const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Atharva"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser  = {

email : "some@gmail.com",
fullname : {
    userfullname: {
    firstname : "Atharva",
    lastname : "Naik",
    }
},

}

// console.log(regularUser.fullname.userfullname)

const obj1 = { 1: "a", 2 : "b"}
const obj2 = { 3: "a", 4 : "b"}
const obj4 = { 5: "a", 6 : "b"}

// const obj3 = Object.assign({}, obj1,obj2,obj4) //merges ob1, obj2, obj4

// console.log(obj3);

const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))  // gives me keys ( variables/constant)
// console.log(Object.values(tinderUser)) // gives me values of keys like values of variables
// console.log(Object.entries(tinderUser))// give me keys and corresponding value in an array

// console.log(tinderUser.hasOwnProperty('name'))

const course = {
    coursename : "Javascript",
    courseprice : "1000",
    courseInstructor : "HiteshChaudhary"
    
}

const {courseInstructor : Instructor} = course // not working
//  console.log(courseInstructor)
//  console.log(course.courseInstructor)
//  console.log(Instructor)
 
// console.log(tinderUser)

// { // JSON
//     "name" : "Atharva",
//     "age"  : "20",

// }