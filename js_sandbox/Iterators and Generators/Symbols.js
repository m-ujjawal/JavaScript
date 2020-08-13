//Create a symbol
//Cannot create symbol with new because it's premitive and there is no constructor
//const sym1=new Symbol();//Error: Uncaught TypeError: Symbol is not a constructor

// const sym1=Symbol(); //return in log Symbol()
// const sym2=Symbol('sym2');//can also add identifire; return Symbol(sym2)

// console.log(sym2);
// console.log(typeof sym1); //gives symbol; it's clear that it's pure primitive value

// //Symbol is always unique
// console.log(Symbol()===Symbol());//false; it prove that two symbol can never be same
// console.log(Symbol('123')===Symbol('123'));//false
// console.log(Symbol()===Symbol('abc'));//false
// //console.log(`Hello ${sym1}`);//Error: Uncaught TypeError: Cannot convert a Symbol value to a string
// console.log(`Hello ${String(sym1)}`);//can wrap symbol in string function
// console.log(`Hello ${sym1.toString()}`);//can also do toString()

//unique Object keys
const KEY1=Symbol();
const KEY2=Symbol('sym2');

const myObj={};

//myObj.KEY1='Prop1';//can't do bcz KEY1 will be considered as normal property not Symbol
myObj[KEY1]='Prop1'//Correct way
myObj[KEY2]='Prop2'//Correct way
myObj.key3='Prop3';//considered as props
myObj.key4='Prop4';//considered as props

// console.log(myObj[KEY1]);//Prop1
// console.log(myObj[KEY2]);//Prop2

//Cannot loop through symbol using for...in
//because Symbols are not emurable

// for(let i in myObj){
//     console.log(`${i}: ${myObj[i]} `);//return key3: Prop3  Symbols.js:38 key4: Prop4 ; 
                                        //get only key3 and key4 not KEY1 and KEY2 because we can't iterate symbols 
// }

//Symbols are ignored when using JSON.stringify
console.log(JSON.stringify({key:'prop'}));//return {"key":"prop"}; normal situation without symbol
console.log(JSON.stringify({[Symbol('sym1')]:'prop'}));//return {}; with symbol return empty object
