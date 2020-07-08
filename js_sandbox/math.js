const num1=100;
const num2=50;
let val;
//SImple math with Number
val=num1+num2; //val=150
val=num1*num2; // val=5000
val=num1-num2; // val=50
val=num1/num2; // val=2
val=num1%num2; //val-0

//Math Object

val=Math.PI;//val-3.141592653589793
val=Math.E;
val=Math.round(2.8); // val-3, normal round
val=Math.ceil(2.4)// val-3, round up
val=Math.floor(2.8); //val-2, round down
val=Math.sqrt(64); //val-8, square root
val= Math.abs(-33);// val-33, return absolute number i.e. positive
val=Math.pow(8,2);// val-64, return 8 to the power of 2
val=Math.min(2,33,5,-1,55,87);// val:-1, return min no
val=Math.max(2,5,6,11,98);// val-98, return max no
val=Math.random();//return random decimal
val=Math.floor(Math.random()*20+1)//random no between 1 to 20


console.log(val);