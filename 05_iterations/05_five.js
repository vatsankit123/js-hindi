//  node 05_iterations/05_five.js


const coding = ["js","java","ruby","python","cpp"]

// codign.forEach( function(item){
//     console.log(item)
// } )

// codign.forEach((item)=>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })


const mycoding = [
    {
        languagename : "javascript",
        languagefilename: "js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename: "c++",
        languagefilename: "cpp"
    },
]

mycoding.forEach((item)=>{
console.log(item.languagename);
})