//FUNCTION DECLARATION

// function greet() {
//     //console.log('Hello');
//     return 'Hello test';
// }

// console.log(greet());

function greet(firstName, lastName) {
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greet());// returs Hello undefined undefined, because greet method takes 2 arguments 
//but we are not pasing anything from greet method

//console.log(greet('John', 'Doe'));

//we can have a default value of parameter in ES5 by using 'if condition' in function definition like:

// function greet(firstName, lastName) {
//     if (firstName === 'undefined') { firstName = 'John' }
//     if (lasttName === 'undefined') { lastName = 'Doe' }
//     //console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// }

//we can define the abouve function in ES6 with default value by assigning default value in parameter itself like:

//function greet(firstName = 'John', lastName = 'Doe') {
    //     //console.log('Hello');
    //     return 'Hello ' + firstName + ' ' + lastName;
    // }

//FUNCTION EXPRESSION
//it can be named or anonymous, we can also have a default parameter value like above i.e. function (x=3)
const square =function(x=3){
    return x*x;
};
  
console.log(square(8)); //64
console.log(square()); //9, taking default arg 3

//IMMEDIATELY INVOCASBLE FUNCTION EXPRESSIONS - IIFEs
//Need to add parenthesis at end to run the IIFEs
// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('Hello '+name);
// })('Brad');

//PROPERTY METHODS, method/function as a property of an object

const todo={
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}
//Can also define function outside for the object todo 
todo.delete=function(){
console.log('Delete todo...')
}

todo.add(); //Add todo..
todo.edit(3);// Edit todo 3
todo.delete();// Delete todo...
