const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

//Another way to create object with prototype by using create method of Object
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary);
console.log(mary.greeting());//Hello there Mary Williams

mary.getsMarried('Thompson');
console.log(mary.greeting());//Hello there Mary Thompson

//2nd way to create object by passing multiple 2 args, 1st-prototypeName, 2nd- value with key-value pair
const brad = Object.create(personPrototypes, {
    firstName: { value: 'Brad' },
    lastName: { value: 'Traversy' },
    age: { value: 36 }
});

console.log(brad);