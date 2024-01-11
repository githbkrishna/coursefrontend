// variables === is like a container who store values on it. 
// there is 3 type of variable
// var, let, const, are reserved keyword
// var    //first is var 
// let    //this is introduce in ES6 concept
// const  //this is introduce in ES6 concept

// var fname = "hello" // "hello", inside the "" is string value

// console.log("fname") 

// console.log(fname)

// let fname = "hello" 
// console.log("fname") 
// console.log(fname)

// const fname = "hello" 
// console.log("fname") 
// console.log(fname)


// diffrence between var, let, const 
// 1st

// var fname = "hello" //declared
// var fname = "world" //redeclared
//     fname = "Radhe" //reassign
// console.log(fname);

// let fname = "hello" //declared
// let fname = "world" //can't redeclared
    // fname = "Radhe"   //reassign
// console.log(fname);

// const fname = "hello" //declared
// const fname = "world" //can't redeclared
//     fname = "radhe"   //can't reassign
// console.log(fname);


// 2nd
// global scope, block scope 

// if(1==1){ // value start from { to } ,value inside the "{ }" is called block code
//     var fname = "hello"  
//     // var is global scope variable because stored value in varible name can be called from outside the block code 
//     console.log(fname);
// }
// console.log(fname);

// if(1==1){
//     let fname = "hello"  //let is not global scope variable it is block scope variable
//     console.log(fname);
// }
// console.log(fname);

// if(1==1){
//     const fname = "hello"  //const is not global scope variable it is block scope variable
//     console.log(fname);
// }
// console.log(fname);

// document.write("hello js <br>");

// let name = "hello" 
console.log(name); 
//it will give empty value if you comment or remove the previous line
//because name is used in form to store the data in the form
// it will store the previouse value and then show it on the console
