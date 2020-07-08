

let val;

// Number to String
val = String(555) // return-555, type-Sting length-3
val = String(4+4) // return- 8, type-Sting length-1

//Bool to String
val = String(true); // return- true, type-String, length-4
val= String(new Date()); // return- current date, type- String, length-57

//Array to String
val= String([1,2,3,4]); // return- 1,2,3,4 type- String, length- 7

//toString()- another way to convert into String
val=(5).toString()// return- 5, type- String, length- 1
val=(true).toString()// return- true, type- String, length-4

//String to Number
val=Number('5');// return- 5, type-Number, toFixed-5
val= Number(true);// return- 1,type- Number, toFixed-1
val= Number(false);// return- 0,type- Number, toFixed-0
val=Number(null);// return- 0,type- Number, toFixed-0
val=Number('Hello')// return- NaN,type- Number, toFixed-NaN
val= Number([1,2,3,4]);// return- NaN,type- Number, toFixed-NaN

//parseInt()

val=parseInt('100');// return- 100,type- Number, toFixed-100
val=parseInt('100.00');// return- 100,type- Number, toFixed-100
val=parseFloat('100.31');// return- 100.31,type- Number, toFixed-100(because using toFixed())

console.log(val);
console.log(typeof val);
//console.log(val.length);// only works with string bcz length is String's method
console.log(val.toFixed()) //only works with Number because it's Number method, 
                            //used to formate number into decimal formate as per the argument we pass, 
                            //if we don't pass anything then return without decimal

//Type Coercion- JavaScript itself does

const val1='5';
const val2=6;
const sum=val1+val2; // sum-56 type- String, JavaScript doesn't add rather append the val2 into val1 and return as String
const sum1=Number(val1+val2);// sum-56, type-Number
const sum2=Number(val1)+val2; // sum-11, type-Number

console.log(sum2);
console.log(typeof sum2);