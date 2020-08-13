//Iterator Example
function nameIterator(names) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < names.length ?
                { value: names[nextIndex++], done: false } :
                { done: true }
        }
    }
}

//Create an array of names
const nameArr = ['Jack', 'Jill', 'John'];
//Init Iterator and pass in the names array
const names = nameIterator(nameArr);
console.log(names.next().value);//Jack
console.log(names.next().value);//Jill
console.log(names.next().value);//John
console.log(names.next());//{done: true}

//Generator Example
//Generators are used to give multiple values
//to create a generator put astrik sign (*) with function
function* sayName() {
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name = sayName();
console.log(name.next());//{value: "Jack", done: false}
console.log(name.next().value);//Jill
console.log(name.next().value);//John
console.log(name.next());//{value: undefined, done: true}

//ID Creator
function* createIds() {
    let index = 1;
    while (true) {
        yield index++;
    }
}

const gen=createIds();
console.log(gen.next().value);//1
console.log(gen.next().value);//2
console.log(gen.next().value);//3
console.log(gen.next().value);//4
