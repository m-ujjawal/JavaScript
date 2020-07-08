//GLOBAL SCOPE

var a = 1;
let b = 2;
const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);//4 5 6, that means we can have a variable with the same name 
// }

// test();
//console.log('Global Scope: ', a, b, c);//1 2 3

// if (true) {
//     //Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If Scope: ', a, b, c);// 4 5 6
// }

//console.log('Global Scope: ', a, b, c);//4 2 3; block scope overrides the global variable 
                                    //but let and const didn't override,
                                    // so block level variable has capability to override global variable having var type 

for(var a=0;a<10;a++){
    console.log(`Loop: ${a}`); //Loop: 0 Loop: 1 Loop: 2 Loop: 3 Loop: 4 Loop: 5 Loop: 6 Loop: 7 Loop: 8 Loop: 9
}
console.log('Global Scope: ', a, b, c);//10 2 3