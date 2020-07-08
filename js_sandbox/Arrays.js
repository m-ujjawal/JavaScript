//Create some arrays
const numbers=[43,56,33,23,44,36,5];
const numbers2=new Array(22,45,33,76,54);
const fruits=['Apple','Banana','Oracge','Pear'];
const mixed=[22,'Hello',true,undefined,null,{a:1,b:2},new Date()];

let val;

//Get array length
val=numbers.length;
//Check if is array
val=Array.isArray(numbers)//return true is passed arg is array else false
//Get single value
val=numbers[3];//return 23
val=numbers[0];//return 43
//insert into array
numbers[2]=100;//[43, 56, 100, 23, 44, 36, 5]
//Find index of value
val=numbers.indexOf(36);//return 5; -1 if not found in array
//Mulating arrays
numbers.push(250);//Add on to end, return [120, 43, 56, 100, 23, 44, 36, 5,250]
numbers.unshift(120);//Add on to front, return [120, 43, 56, 100, 23, 44, 36, 5, 250]
numbers.pop();//Take off from end, return [120, 43, 56, 100, 23, 44, 36, 5]
numbers.shift();//Take off from front, [43, 56, 100, 23, 44, 36, 5]
//splice values
numbers.splice(1,3);//first arg say from where to start and 2nd arg tells no of value to be spliced, [43, 44, 36, 5]
//Reverse
numbers.reverse();//to reverse an array, [5, 36, 44, 43]
//Concatination array
val=numbers.concat(numbers2);//[5, 36, 44, 43, 22, 45, 33, 76, 54]
//sorting
val=fruits.sort();//["Apple", "Banana", "Oracge", "Pear"]
val=numbers.sort();//[36, 43, 44, 5], sort on the basis of beginning number that we don't want
//Use the "compare function"
val=numbers.sort(function(x,y){
    return x-y;
});                                      //[5, 36, 43, 44]
val=numbers.sort(function(x,y){
    return y-x;
});                                      // [44, 43, 36, 5], reverse sorting
//Find
function under50(num){
     return num<50;
}
val=numbers.find(under50); //return 44 because 44 is the first no which is under fifty

console.log(numbers)
console.log(val);