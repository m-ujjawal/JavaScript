//set local storage item: will not clear untill it is cleared manually
// localStorage.setItem('name','John');
// localStorage.setItem('age','30');

// //set session storage item: cleared out when browser clossed
// sessionStorage.setItem('name','Beth');

// //remove from storage
// localStorage.removeItem('name');

// //get from storage
// const name=localStorage.getItem('name');
// const age=localStorage.getItem('age');
// console.log(name,age);

// //clear local storage
// localStorage.clear();
//way to save value at form submit event but the problem is at every submit value will get replaced because the key is same at all request

document.querySelector('form').addEventListener('submit',
    function (e) {
        const task = document.getElementById('task').value;
        localStorage.setItem('task', task);
        alert('Task saved')
        e.preventDefault()
    })

// to solve above issue we can have a array like this
//Imp point to be noted is in storage always save value in string format 
//but in most of the cases we use object (like model class of pojo) to get and set 
//so we use parse and stringify method of JSON to convert object into string and vice-versa
document.querySelector('form').addEventListener('submit',
    function (e) {
        const task = document.getElementById('task').value;
        let tasks;
        //Get the existing value into array and adding new value before setting 
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Task saved')
        e.preventDefault()
    })

    //Cann't do foreach loop directly to do it we have to parse into string
    const tasks=JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function(task){
        console.log(task);        
    });