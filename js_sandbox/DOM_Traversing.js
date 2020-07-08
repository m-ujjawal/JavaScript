let val;

const list=document.querySelector('ul.collection');

const listItem=document.querySelector('li.collection-item:first-child');
val=listItem;
val=list;

//Get child nodes

val=list.childNodes;//Returns the HTML collection of all the NodeList(including element,comment,text,attribute etc); 
                    //Consider all line break(also clossing tag) as a text node
val=list.childNodes[0];//Return 1st NodeList
val=list.childNodes[0].nodeName;//Return node name of 1st node list
val=list.childNodes[0].nodeType;//return int 3 since 1st node is text (on the basis of below nodelist type)
val=list.childNodes[1].nodeType;//return int 1 since 2st node is element (on the basis of below nodelist type)

// 1-Element
// 2-Attribute(deprecated)
// 3- Text Node
// 8- Comment
// 9- Documnet itself
// 10- Doctype

//Get children element nodes

val=list.children;// return child of all elements only not all nodes
val=list.children[0];// return 1st child element
list.children[1].textContent='Hello';//Change the text of 2nd child element

//childern of children

val=list.children[3].children;//return children of 4th child
val=list.children[3].children[0];//return 1st child of 4th child
list.children[3].children[0].id='test-link';//add id attribute to 1st child of 4th child

//first child
val=list.firstChild;//return first node whether its element or not
val=list.firstElementChild;// return first element not node

//last child
val=list.lastChild;//return last node whether its element or not
val=list.lastElementChild;// return last element not node

//count child elements
val=list.childElementCount;// return the count of all child element

//Get Parent node

val=listItem.parentNode;// return parent node
val=listItem.parentElement;// return parent element
val=listItem.parentElement.parentElement;// return parent of parent

//Get next siblings

val=listItem.nextSibling;//return next sibling node
val=listItem.nextElementSibling.nextElementSibling;// return next to nect sibling element
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;//Return 2nd sibling of listitem

//Get previous siblings

val=listItem.previousSibling;//return next sibling node
val=listItem.previousElementSibling.previousElementSibling;// return next to next sibling element

console.log(val);