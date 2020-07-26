//Person Constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('john', 'Doe');

//console.log(person1.greeting());//Hello there john Doe

//Customer constructor 
function Customer(firstName, lastName, phone, membership) {
    //call Person constructor from Customer constructor; 
    //'call()' is a function which allows to call another function from somewhere else in the currect contect. 
    //1st parameter of call() function is this and next will be extra property which are inheriting; 
    //Here it will take 3 arg; 1st-this,2nd- firstName, 3rd-lastNmae
    //but call() method will not inherit Person's prototype
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

//Inherit the person prototype method
Customer.prototype = Object.create(Person.prototype);//But still greeting() function will be inside Person proptype
//To put it inside customer prototype use below code
//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create CUstomer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);
console.log(customer1.greeting());//Error becasue greeting is not the prototype of customer 
//To inherit person's prototype into customer we have to add "Inherit the person prototype method" section code
//then method will return 'Hello there Tom Smith'

//Customer greeting(override Person greeting)

Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} 
    welcome to our company`;
}

console.log(customer1.greeting());