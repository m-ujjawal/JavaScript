//Person Constructor
//Always starts constructor function with capital letter
function Person(name, dob) {
    this.name = name;//this always refers to the current object
    //this.age=age;
    this.birthday = new Date(dob)
    //can also have method within constructor
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        //console.log(diff);
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    //console.log(this);// Print person object
}

//console.log(this);//log window object, because windows is a global object and this referes to the current object which is window


// const brad = new Person('Brad',36);// create an object
// const john = new Person('John',30);
// console.log(brad);
// console.log(john);
// console.log(john.age);//30

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());