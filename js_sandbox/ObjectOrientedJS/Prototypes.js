//Object.prototype
//Person.prototype

//Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    //caculate age is same for every person; 
    //this is something we should put inside prototype not directly into the object
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Calculate age
//calculateAge will no longer be inside property it will show inside "__proto__" 
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full Name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//Gets Married
//Not only we can get data through pototype but can also manupulate it or set property 
Person.prototype.getMaried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Deo', '8-12-90');
const mary = new Person('Mary', 'johnson', 'March 20 1978');

console.log(mary);//Person object (Mary johnson)

console.log(john.calculateAge());//29
console.log(mary.getFullName());//Mary johnson
mary.getMaried('Smith');//set last name as Smith
console.log(mary.getFullName());//Mary Smith

//call Object prototype
console.log(mary.hasOwnProperty('firstName'));//true
console.log(mary.hasOwnProperty('getFullName'));//false