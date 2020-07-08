//EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click',
//     function () {
//         console.log('card title');
//     });

// document.querySelector('.card-content').addEventListener('click',
//     function () {
//         console.log('card content');
//     });

// document.querySelector('.card').addEventListener('click',
//     function () {
//         console.log('card');
//     });
// document.querySelector('.col').addEventListener('click',
//     function () {
//         console.log('col');
//     });

//EVENT DELEGATION

//const delItem = document.querySelector('.delete-item');
//delItem.addEventListener('click', deleteItem);//event only get triggered for 1st item not working for others even class name is same for all item
//So this is the situation where we need to use event delegation
//another use case is when user want to add or delete something(list here) after page loaded

document.body.addEventListener('click', deleteItem);//So choose parent as event listner 

//Since event will flow parent to their children so put if condition to get the particular child/grandchild/grandgrandchild....
function deleteItem(e) {
    //console.log('delete item');
      
    // if (e.target.parentElement.className === 'delete-item secondary - content') {
    //     console.log('delete item');
    // }
    //Better way to put if condition is to use classList and use contains otherwise 
    //we have to validate with full all class name and need to update if it modified or add another class name
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
    //console.log(e.target);
}