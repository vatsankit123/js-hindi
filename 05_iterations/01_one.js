// node 05_iterations/01_one.js

// for
/*

for(let i=0;i<=10;i++){
    const element = i;
    console.log(element);
}


for(let i=0;i<=10;i++){
    const element = i;  // if we try to access element outside the the loop it will not work
    
}
// console.log(element);
*/

// condition inside loop

for(let i=0;i<=10;i++){
    const element = i;
    if(element==5){
       //  console.log("5 is best number")       // i have commented console log just to make the ouput clear at the time of revision you can remove the comment to check the output
    }
    // console.log(element);
}


for(let i=1;i<=20;i++){
   //  console.log(`outer loop value : ${i}`);       // to print table
    for(let j=1;j<=20;j++){
        // console.log(`inner loop value : ${j}`);

       // console.log(i+'*'+j+'='+i*j);

      }
}


// declaring an array

let myarray = ["flash","batman","superman"]
// console.log(myarray.length);

for(let index =0 ; index<myarray.length;index++){
const element=myarray[index];
// console.log(element)
}


// break and continue keyword

// for(let index=1 ; index <= 20 ;index++){
//     if(index==5){
//         console.log(`deteted 5`);            // after break statement loop will end end and it comes out of the scope
//         break;
//     }
//     console.log(`value of index is ${index}`);
    
// }


for(let index=1 ; index <= 20 ;index++){
    if(index==5){
        console.log(`deteted 5`);                 // will constinue even after detecting 5
        continue;
    }
    console.log(`value of index is ${index}`);
    
}