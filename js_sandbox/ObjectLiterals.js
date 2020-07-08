const person={
    firstName:'Steve',
    lastName:'Smith',
    age:30,
    email:'steve@aol.com',
    hobbies:['music','sports'],
    address:{
        city:'Miami',
        state:'FL'
    },
    getBirthYear: function(){
        return 2017-this.age; //cannot access age directly, 
        //since age is the part of current (person) object itself,
        // so need to use with this 
    }
}

let val;
val=person;
//Get specific value
val=person.firstName; //Steve
val=person['lastName'];//Smith
val=person.age;//30
val=person.hobbies[1];//sports
val=person.address.state;//FL
val=person.address['city'];//Miami
val=person.getBirthYear();//1987


console.log(val);
//can have an array of object
const people=[
    {name:'John', age:30},
    {name:'Mike', age:23}
];

for(let i=0;i<people.length;i++){
    console.log(people[i].name); //John, Mike
}