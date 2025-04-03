// nojsde 05_iterations/04_four


// iterating therough an object using for in loop

const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for(const key in myobject ){
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}


// can we use for in loop in array yes we can but mostly we use for of

const programming=["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}