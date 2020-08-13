//Destructuring Assignment

// let a, b;
// [a, b] = [100, 200];

// console.log(a);//100
// console.log(b);//200

// //Rest Pattern
// // '...rest' pattern is called as 'spread operator' a way to assign the leftover value in a variable called rest
// //example in below example a=100,b=200,c=300,rest=[400,500]
// [a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest);//[300,400,500]

// [a, b, c, ...rest] = [100, 200, 300, 400, 500];
// console.log(c);//300
// console.log(rest);//[400,500]

// //Rest with object
// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(a,b);//100 200
// //console.log(d);//Error: Uncaught ReferenceError: d is not defined

// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(rest);//{c: 300, d: 400, e: 500}

//Array Destructuring
// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);//John Beth Mike

//Parse array returned from function
function getPeople() {
    return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3);//John Beth Mike

//Object Destructuring

// const person = {
//     name: 'John Deo',
//     age: 32,
//     city: 'Miami',
//     gender: 'Male',
//     sayHello:function(){
//         console.log('Hello');
//     }
// }

// //Old ES5
// const name = person.name,
//     age = person.age,
//     city = person.city;

// //New ES6 Destructuring
// const { name, age, city,sayHello } = person;
// console.log(name, age, city);//John Doe 32 Miami
// sayHello(); //Hello