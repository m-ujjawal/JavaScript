let val;
const today = new Date();
let birthday = new Date('9-10-1981 22:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today; //type-Object
//val=today.toString() // type-String
val = birthday;
//get date and time
val = today.getMonth();// renturn month number in number, Jan starts with 0, for 6/20/2020, gives 5
val = today.getDate();// return date for 6/20/2020, gives 20
val = today.getDay();//return day number in number, Sunday is 1, for 6/20/2020, gives 6
val = today.getFullYear();//return 2020
val = today.getHours();// returns hours
val = today.getMinutes();//returns minutes
val = today.getSeconds();//returns seconds
val = today.getMilliseconds(); //return milliseconds
val = today.getTime();//returns timestamp,amount of sec passed since 1st jan 1970
//set date and time
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);


console.log(val);
console.log(typeof val);