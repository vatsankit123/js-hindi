// node 05_iterations/07_seven.js

const mynums= [1,2,3,4,5,6,7,8,9,10]

//const newnums=mynums.map((num)=>num+10)

//console.log(newnums);



// chainnig (multiple functions)

const newnums1= mynums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=> num>40)

console.log(newnums1)