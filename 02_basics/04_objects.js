// node 02_basics/04_objects.js

// declaring object as non-singleton

const tinderuser= {}

tinderuser.id = "123abc";
tinderuser.name="ankit";
tinderuser.isloggedin=false;

//console.log(tinderuser)

const regularuser ={
    email: "ankit@gmail.com",
    fullname:{
        firstname:"ankit",
        lastname:"kumar"
    }
}

console.log(regularuser.fullname)

// merging two object

const obj1= {1:"a",2:"b"}
const obj2= {3:"c",4:"e"}

//const obj3 = {obj1,obj2}  // this will give output as an object inside the object

//console.log(obj3)

// another way to merging to object and better way is 

const obj3= Object.assign(obj1,obj2)   // study at mdn about object assign
console.log(obj3)

// spread operator to merge object 

const obj4= {...obj1,...obj2}   // will give same result as assign but most used syntax
console.log(obj4)

// when we fetch data from the data bases it comes in form of array inside which multiple objects are therre and the sytax that we use to fetch that data is

// let the data are

const user =[
    {
        id:1,
        email:"vatsa@gmail.com"
    },
    {
        id:2,
        email:"kumar@gmail.com"    // just like this multiple objects comes inside an array 
    },
    {
        id:3,
        email:"ankit@gmail.com"
    }

]

// and if we need to fetch any of them we use these syntax

console.log(user[1].email);

console.log(Object.keys(tinderuser));   // to retrive key from data

console.log(Object.values(tinderuser)) ; // to retrieve values of key from the data

console.log(Object.entries(tinderuser)) ;  //will give all the entries that present in the object

console.log(tinderuser.hasOwnProperty('isloggedin'));  // will return true if the property present inside the object



// **************** more about object  ******************


const course = {
    coursename:"js in hidi",
    price:"999",
    courseinstructor:"hitesh"
}

// another method to fetch data from object

const {courseinstructor:instructor}=course  // aliasing or destructuring object

console.log(instructor);  // we can call instructor now

// or we can simply do

console.log(course.courseinstructor)