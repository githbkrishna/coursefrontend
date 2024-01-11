// 1st

// function test() {
//     console.log("test called from new");
// }

// 2nd
// function test() {
//     console.log("test called from new");
// }

// 3rd
// export function test() {
//     console.log("test called from new");
// }

// export function test2() {
//     console.log("test2 called from new");   
// }

// 4rth
// function test() {
//     console.log("test called from new");
// }

// export { test } 


// function test() {
//     console.log("test called from new");
// }

// function test2() {
//     console.log("test called from new");
// }

// export { test , test2 } 

// 5th 
// default export
// in default we can send only one functional component export 

function test1() {
    console.log("default export test1");
}

function test2() {
    console.log("default export test2");
}

export default test1()

// in default we can send only one functional component export 
// export default test2()