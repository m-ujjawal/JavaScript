//document.getElementsByClassName

// const items=document.getElementsByClassName('collection-item');
// console.log(items);//Returns the collection of elements which matched with the provided class name
// console.log(items[0]);// return the 1st element of the collection of elements which matched with the provided class name
// items[0].style.color='red';//Change the test color of 1st element of the collection
// items[3].textContent='Hello';//change the test of 1st element of the collection

// const listItems=document.querySelector('ul').getElementsByClassName
// ('collection-item');
// console.log(listItems);

//document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);//Returns the collection of elements which matched with the provided tag name
// console.log(lis[0]);// return the 1st element of the collection of elements which matched with the provided tag name
// lis[0].style.color = 'red';//Change the test color of 1st element of the collection
// lis[0].textContent = 'Hello';//change the test of 1st element of the collection

// //As we know collections that we are getting above is not an array

// //lis.reverse();//gives array because reverse is the method of array

// //Convert HTML Collection into array

// lis = Array.from(lis);

// lis.reverse();// No error lis is now array

// //can do forEach also
// lis.forEach(function (li, index) {
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectorAll- return all the NodeList(not only elment but things like text node) not HTML Collection
//allows to do array operation without converting into array

const items=document.querySelectorAll('ul.collection li.collection-item');// Return the NOdeList

//No need to convert into array
items.forEach(function(item){
    item.textContent='Hello';
});

//Select all odd and even element
const liOdd=document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background='#ccc';
});

//For loop works with even HTML Collection without converting into array bcz length and bracket is allowed in HTML Collection
for(let i=0;i<liEven.length;i++){
    liEven[i].style.background='#f4f4f4';
}

console.log(items)
