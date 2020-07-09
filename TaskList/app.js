//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners
loadEventListner();

//Load all event listners
function loadEventListner() {
    //DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTask);
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

//Get tasks from LS 
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        //Create li element
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';
        //Create text node and append to li
        li.appendChild(document.createTextNode(task));
        //Create new link element
        const link = document.createElement('a');
        //Add class
        link.className = 'delete-item secondary-content';
        //Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Append the link to li
        li.appendChild(link);
        //Append li to ul
        taskList.appendChild(li);
    })
}

//Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }
    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);
    //store li

    storeTaskInLocalStorage(taskInput.value);
    //Clear Input
    taskInput.value = '';
    //console.log(li);
    e.preventDefault();
}

//Store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {

    if (e.target.classList.contains('fa')) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    //console.log(e.target);
    //Remove from LS
    removeTaskFromLocalStorage
        (e.target.parentElement.parentElement)
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function clearTask() {
    //taskList.innerHTML='';

    //Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    //https://jsperf.com/innerhtml-vs-removechild/47

    //Clear from LS
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // console.log(text);
    document.querySelectorAll('.collection-item').forEach
        (function (task) {
            const item = task.firstChild.textContent;
            //indexOf method return the first index position of the text found if not found returns -1
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            }
            else {
                task.style.display = 'none';
            }
        });

}