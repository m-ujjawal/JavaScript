//create element

const li = document.createElement('li')//Create li element

//Add class

li.className = 'collecrion-item';//Add class attribute to the element

//Add id

li.id = 'new-item';//Add id attribute to the element

//Add attribute

li.setAttribute('title', 'New Item');//Add new attribute

//Create text node and append

li.appendChild(document.createTextNode('Hello World'));//Create text node and append it to li

//Create new link element

const link = document.createElement('a');//Create <a> element

//Add Classes

link.className = 'delete item secondary-content';//Add class element
//Add icon html

link.innerHTML = '<i class="fa fa-remove"></i>';//Add html in link

//Append link into li

li.appendChild(link);//append link to li

//Append li as child to ul

document.querySelector('ul.collection').appendChild(li);//Add new li to existing ul


console.log(link);


console.log(li);