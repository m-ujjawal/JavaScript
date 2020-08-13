//MAPS- key-value pairs - can use ANY type as a key or value

const map1 = new Map();
//Set Keys
const key1 = 'some string',
    key2 = {},
    key3 = function () { },
    key4 = {};

//Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');
map1.set(key4, 'Value of key4');//can have the same key like key4 and key2 are same

//Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3), map1.get(key4));//Value of key1 Value of key2 Value of key3

//Count Values

console.log(map1.size);//4

//Iterating Maps
//Loops using for...of to get keys and values
for (let [key, value] of map1) {
    console.log(`${key}=${value}`);//some string=Value of key1
                                    //[object Object]=Value of key2
                                    //function () { }=Value of key3
                                    // [object Object]=Value of key4
}

//Iterate keys only
for (let key of map1.keys()) {
    console.log(key);//some string 
                    //{}
                    //f(){}
                    //{}
}

//Iterate value only
for (let value of map1.values()) {
    console.log(value);//Value of key1
                        //Value of key2
                        //Value of key3
                        //Value of key4
}

//Loop with forEach
map1.forEach(function (value, key) {
    console.log(`${key}=${value}`);//some string=Value of key1
                                //[object Object]=Value of key2
                                //function () { }=Value of key3
                                // [object Object]=Value of key4
});

//Convert To ARRAYS
//Create an array of the key value pairs
const keyValArr=Array.from(map1);
console.log(keyValArr);//(4) [Array(2), Array(2), Array(2), Array(2)]
                        // 0: (2) ["some string", "Value of key1"]
                        // 1: (2) [{…}, "Value of key2"]
                        // 2: (2) [ƒ, "Value of key3"]
                        // 3: (2) [{…}, "Value of key4"]

//Create an array of the keys pairs
const keyArr=Array.from(map1.keys());
console.log(keyArr);//["some string", {…}, ƒ, {…}]

//Create an array of the values pairs
const valuesArr=Array.from(map1.values());
console.log(valuesArr);//["Value of key1", "Value of key2", "Value of key3", "Value of key4"]

