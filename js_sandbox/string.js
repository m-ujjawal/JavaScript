
const firstName='William';
const lastName='Johnson';
const age=36;
const str='Hello there i am brad'

let val;
//Concatenation
val=firstName+lastName;//WilliamJohnson
val=firstName+' '+lastName;//William Johnson
//Append
val=  'Brad ';
val+='Traversy';
val='Hello, my name is '+firstName+' and i am '+ age;

//Escaping
val='That\'s awesome, I can\'t wait';

//Length
val=firstName.length; // return 7, it's property of string not method so parenthesis is not allowed
//concat
val=firstName.concat(' ',lastName); //William Johnson
//change case
val=firstName.toUpperCase();//WILLIAM
val=firstName.toLowerCase();//william
//String as Array
val=firstName[0]//W

//indexOf()
val=firstName.indexOf('l')//2, if char no available return -1
val=firstName.lastIndexOf('l')//3
//charAt()
val=firstName.charAt(2)//l 
//Get last character
val=firstName.charAt(firstName.length-1);

//subString()
val=firstName.substring(0,4); //Will
//slice
val=firstName.slice(0,4);// Will, similar to subString
val=firstName.slice(-3);// iam, return string from back
//split(); split string into array based on seperator
val=str.split(' '); //return string array with size 5 by spliting on the bases of space
//replace()
val=str.replace('Brad','Jack');
//include()
val=str.includes('Hello');//true, varefy wthether hello is available in str or not
val=str.includes('foo');//false

console.log(val);