// node 05_iterations/09_nine.js

// Array.reduce

const array = [1,2,3];

// const intialvalue=0;

// const sumwithinitial = array.reduce(
//   (accumulator , currentvalue) => accumulator+currentvalue,intialvalue
// );

// console.log(sumwithinitial)


// how loops are working

const mytotal= array.reduce( function(acc,currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval

},0)                                                      // here 0 is the value of acc where it starts from 

//console.log(mytotal)



// in object


const shoppingcart = [
{
    itemname: "java",
    price:299
},
{
    itemname: "py",
    price:2199
},

{
    itemname: "c++",
    price:2099
},

{
    itemname: "datascience",
    price:1299
},

{
    itemname: "r",
    price:2999
},

]

const bill=shoppingcart.reduce((acc,item) => acc+item.price,0)

console.log(bill)

