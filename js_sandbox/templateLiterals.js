const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

let html;

//Without template string(es5)

html = '<ul>' +
    '<li>Name: ' + name + '</li>'+
    '<li>Age: ' + age + '</li>'+
    '<li>Job: ' + job + '</li>'+
    '<li>City: ' + city + '</li>'+
'</ul>'

function hello(){
    return 'hello';
}

//with template string/literals(ES6)- 
//use button next to 1, can use expression and call function also

html= 
`<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
</ul>`


document.body.innerHTML=html