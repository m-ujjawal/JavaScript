//REPLACE ELEMENT

//Create Element
const newHeading = document.createElement('h2');//create h2 tag

//Add id
newHeading.id = 'task-title';
//create New text node and append
newHeading.appendChild(document.createTextNode('Task List'));

//Get old heading
const oldHeading = document.getElementById('task-title');

//Get parent
const cardAction = document.querySelector('.card-action');
//Replace old node with new node 
cardAction.replaceChild(newHeading, oldHeading);

//console.log(newHeading);

//REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();//remove 1st list

//Remove child element
list.removeChild(lis[3]);//remove 4th child of the list

//CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');//return first li
const link = firstLi.children[0];//return first element (a tag) of first li

let val;

//Classes
val = link.className;//Return classname of selected element
val = link.classList;//return html collection of classsname of selected element
val = link.classList[0];//return 1st classname from html collection
link.classList.add('test');//Add className into element
link.classList.remove('test')//remove class from element
val = link;

//Attributes

val = link.getAttribute('href');//return href attribute value
val = link.setAttribute('href', 'http://google.com');//set href attribute value
link.setAttribute('title','Google');
val = link.hasAttribute('title');//verify where mentioned attribute is available or not; return true/false
link.removeAttribute('title');//remove attribute if present

console.log(link);
console.log(val);