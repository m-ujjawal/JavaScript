//ES6 is basically work underhood of ES5. So ES6 object will also have their prototy and object protorype as well
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    //Any method we add inside the classs is actually going to get added to the prototype 
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getMarried(newLastName) {
        this.lastName = newLastName;
    }

    //static method is the method that can be called without creating an object
    static addNumbers(x, y) {
        return x + y;
    }

}

const mary = new Person('Mary', 'Williams', '11-13-1980');
console.log(mary);
console.log(mary.calculateAge());//39
mary.getMarried('Thompson');
console.log(mary.greeting());//Hello there Mary Thompson
console.log(Person.addNumbers(3, 5));//call static method