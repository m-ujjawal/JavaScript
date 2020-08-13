//SETS - store unique values of any type

const set1 = new Set();

//Add value in set
set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);//It's not an error but will not add

console.log(set1);//{100, "A String", {…}, true}

//Can also declare set like below and add value as the time of set creation
// const set2=new Set([1,true,'string']);
// console.log(set2);//{1, true, "string"}

//Get count
console.log(set1.size);//4

//Check the value
console.log(set1.has(100));//true
console.log(set1.has(50 + 50));//true

console.log(set1.has({ name: 'John' }));//false because it's the reference and two reference cannot be same
//Proof for above statement

console.log({ name: 'John' } === { name: 'John' });//false; both have the same object but both are storing in different heap memory
console.log('hello'==='hello');//true; because string is primitive

//Delete from set
set1.delete(100);

console.log(set1);//{"A String", {…}, true}
console.log(set1.has(100));//false

//ITERATE THROUGH SETS
for(let item of set1){
    console.log(item);//A String
                    // {name: "John"}
                    //  true
}

//Set doesn't have key-value pair so set1.keys(), set1.value() and set1.entries() all give the same result
 

//ForEach loop
set1.forEach((value)=>{
    console.log(value);
});

//Convert set to array
const setArr=Array.from(set1);
console.log(setArr);//["A String", {…}, true]


