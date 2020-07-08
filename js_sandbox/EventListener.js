// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('Hello World');
//     e.preventDefault();
// });

//we can define normal event function also instead of anonomous function
document.querySelector('.clear-tasks').addEventListener('click',
    onClick);

function onClick(e) {
    // console.log('Hello World');
    // e.preventDefault();

    let val;

    val = e;//e is the event 

    //Event target element
    val = e.target;//Return the element where operation performed 
    val = e.target.id;//Give the id of target elment
    val = e.target.className;//Give the clasName of target element
    val = e.target.classList;//Give HTML Collection of the classname

    e.target.innerText = 'Hello';//change the test of the target element
    val = e.type;//Give the type of event i.e click, mouseover etc

    //Timestamp
    val = e.timeStamp;//give the timestamp of event happened

    //Coords event relative to the windows
    val = e.clientY;
    val = e.clientX;

    //Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);

}