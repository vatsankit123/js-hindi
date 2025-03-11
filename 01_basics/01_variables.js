const accountId=144555
let accountEmail="ankit@gmail.com"
var accountpass="1234"
accountcity="bengaluru"

//accountId=2; // not allowed

accountEmail="abdul@gmail.com"     // this is allowed

accountpass="21212"            // this is also allowed 

accountcity="patna"

let accountstate  // agr javascript ke andr hum koi varibale define krke chod dein or usme koi value na dein to javascript usme undefined store karti hai

// console.log(accountcity);

// bar bar console.log likhne se behtar hai ham console.table ka use karein

/*
prefer not to use var because of issue in block and function scope
*/

console.table([accountEmail,accountId,accountpass,accountcity,accountstate])  // sara data tabular form me dikhega