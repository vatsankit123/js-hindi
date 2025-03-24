// node 03_basics/04_iife.js

// Immediately Invoked Function Expression (IIFE)
/*

function chai(){
    console.log(`DB CONNECTED`);
}

chai()
*/


// applyign iife , it simply apllied by using parenthesis

(function chai(){
    console.log(`DB CONNECTED AGAIN`);    // the fist parenthesis is for function and the parenthesis in last is for calling the function or function execution
})();


//In JavaScript, variables declared in the global scope can cause conflicts if multiple scripts define the same variable name. 
// IIFE creates a private scope so that variables inside it don't affect the rest of the program.


( function aurcode(){
    console.log(`DB CONNECTED Two`);    // this will show error although it is defined same as the above function this is becuase once we introduced iife we have to end it by semicolon so we have to put semicolon at the end of first function
})();


// using arrow fucntion  : we can also defined in this way as well

(() => {
    console.log(`DB CONNECTED THREE `)
})();

// one more thing , like we have to pass name, pssing parameter


((name) => {
    console.log(`DB CONNECTED THREE ${name}`)
})("ankit");
