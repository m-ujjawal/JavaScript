//String

const name1 = 'Jeff';
const name2 = new String('Jeff');
//can add the property in String object
//name2.foo='bar';// Add property into object

// console.log(name1);//return Primitive value
// console.log(name2);//return string Object

console.log(typeof name1);//String
console.log(typeof name2);//object
//print NO because '===' checks name and type and since the type of name2 is object so it falls in else block
if (name2 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
}

//Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1);//Return number
console.log(typeof num2);//Return Object 

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1);//return boolean
console.log(typeof bool2);//return Object

//Function
const getSum1 = function (x, y) {
    return x + y;
}
//1st and 2nd parameter will be function argument and 3rd will be function body
const getSum2 = new Function('x', 'y', 'return x+y');//can also define function with new

console.log(getSum2(1, 1));//Call function

//Object
const john1={
    name:'John'
};

const john2=new Object({name:'John'});

console.log(john2);

//Array
const arr1=[1,2,3,4];
const arr2=new Array(1,2,3,4);

console.log(arr2);

//Regular Expressions
const re1=/\w+/;
const re2=new RegExp('\\w+');

console.log(re1);// /\w+/
console.log(re2);// /\w+/
