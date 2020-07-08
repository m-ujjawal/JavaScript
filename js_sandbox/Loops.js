//FOR LOOP

// for(let i=0;i<10;i++){    
//     if(i===2){
//         console.log('2 is my fav no');
//         continue;
//     }
//     if(i===5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('Number: '+i);
// }

//WHILE LOOP

// let i=0;
// while(i<10){
//     console.log('Number '+i);
//     i++;
// }

//DO-WHILE LOOP

// let i=0;
// do{
//     console.log('Number '+i);
//     i++;
// }
// while(i<10);

//LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

//FOREACH LOOP
//it takes anonynous function and takes 3 argument, 1st- iterator, 2nd- index, 3rd- actual array; but all are optional
// cars.forEach(function (car, index, array) {
//     console.log(`${index} : ${car}`); //0 : Ford, 1 : Chevy, 2 : Honda, 3 : Toyota
//     console.log(array);//  ["Ford", "Chevy", "Honda", "Toyota"]
// });

//MAP
//its use to return some diferent array, map takes the function as an argument
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Sara' },
//     { id: 3, name: 'Karen' },
// ]
// const ids = users.map(function (user) {
//     return user.id;
// });
// console.log(ids); //[1, 2, 3], returns an array of ids.

//FOR-IN LOOP

const user={
    firstName:'John',
    lastName:'Deo',
    age:40
}

for(let x in user){
    console.log(x);//firstName, lastName, age, x will just give a key
    console.log(`${x} : ${user[x]}`);//firstName : John, lastName : Deo, age : 40
}