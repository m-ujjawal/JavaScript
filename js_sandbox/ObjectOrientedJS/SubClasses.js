class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName);//to call the parent constructor
        this.phone=phone;
        this.membership=membership;
    }

    static getMembershipCost(){
        return 500;
    }
}
const john=new Customer('John','Doe','555-555-5555','Standard');

console.log(john.greeting());

//console.log(Person.getMembershipCost());// error cannot do bcz getMembershipCost is the method of Customer not Person
console.log(Customer.getMembershipCost());