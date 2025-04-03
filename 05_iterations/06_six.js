//  node 05_iterations/06_six.js

// const coding = ["js","java","ruby","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
  
// })

// console.log(values)           // values return undefined (for each loop wont return any value)

/*

const mynums = [1,2,3,4,5,6,7,8,9,10]

 const newnums = mynums.filter( (num)=> num>4)

 console.log(newnums)


 // we can also write the arrow function by opening scope {} for this we have to use return 

 const newnums1=mynums.filter((num)=>{
      return num>4
 })

 console.log(newnums1)


 // using for each loop

 const newnums2 = []

 mynums.forEach((num)=>{
    if(num>4){
        newnums2.push(num)
    }
 })

 console.log(newnums2)

 */


 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// performing filter operation on object

  const userbooks = books.filter((bk)=> bk.genre === 'History')

  console.log(userbooks)

  // as we had opened a scope hence we have to use return keyword

  const userbooks2 = books.filter((bk)=>{
    return  bk.publish>1995
  })

  console.log(userbooks2)


  //  multiple condition check

  const userbooks3 = books.filter((bk) => {
      return bk.publish > 1995 && bk.genre==='History'
  })

  console.log(userbooks3)