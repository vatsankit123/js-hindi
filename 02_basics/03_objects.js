// node 02_basics/03_objects.js

// singleton 

// objects literal : object ko declare karne ka tarika

// how to declare symbol inside the object this is declared by using sqaure bracket

const  mysmb=Symbol["key1"]

const jsuser = {
    name: "ankit" ,
    [mysmb] : "mykey1",
    age: 22,
    "fullname": "ankit kumar",
    location: "bihar",
    email : "sriram9354@gmail.com" ,
    isloggedin : false,
    lastlogindays : ["monday","saturday"]
}
 
// accessing the objects

console.log(jsuser.email)

// 2nd method by using square notation

console.log(jsuser["email"])


console.log(jsuser.fullname)

// accesing symbol

console.log(jsuser[mysmb])

// changing object values

jsuser.email="ankitkumar@gmail.com"

console.log(jsuser.email)  // it will change the email of the object

// we can also lock the values of the object so that this cant be chaged this can be done by

// Object.freeze(jsuser)

// now changing any object will not effect the for example

jsuser.email="ankitvatsa@gmail.com"

console.log(jsuser.email)

console.log(jsuser)

// adding grettings by using function in js

jsuser.greeting1= function(){
    console.log("hello js user")      
}

console.log(jsuser.greeting1());


jsuser.greeting2= function(){
    console.log(`hello js user, ${this.name}`)      // string manipulation "this" operator will access the object things
}

console.log(jsuser.greeting2());