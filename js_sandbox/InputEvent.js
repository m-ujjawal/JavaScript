const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//clear input
taskInput.value = '';

//form.addEventListener('submit',runEvent);

//Keydown
taskInput.addEventListener('keydown', runEvent);

//Keyup
taskInput.addEventListener('keyup', runEvent);

//Keypress
taskInput.addEventListener('keypress', runEvent);

//focus
taskInput.addEventListener('focus', runEvent);

//blur
taskInput.addEventListener('blur', runEvent);

//cut:fires when we cut
taskInput.addEventListener('cut', runEvent);

//paste:fires when we paste
taskInput.addEventListener('paste', runEvent);

//input: it fires at any input operation that is discussed above like cut, paste,keydown,keypress etc 
taskInput.addEventListener('input', runEvent);

//change:applicable only for dropdown(select);it get fired when the value is selected or changed
//document.querySelector('select').addEventListener('change',runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    //console.log(e.target.value);
    //bind heading with the value entered in task
    //heading.innerText=e.target.value;

    //Get Input value
    //console.log(taskInput.value);

    //e.preventDefault();

}