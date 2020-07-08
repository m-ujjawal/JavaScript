//document.getElementById()

console.log(document.getElementById('task-title'));//Return the element have matched id

//Get things from the element

console.log(document.getElementById('task-title').id);// give the id of selected element
console.log(document.getElementById('task-title').className);//give the class name of selected element

//Change styling

//document.getElementById('task-title').style.background='#333'; //change background color of selected element
//document.getElementById('task-title').style.color='#fff'; //change font color of selected element
document.getElementById('task-title').style.padding = '15px'; //change padding of selected element
//document.getElementById('task-title').style.display='none'; //to make invisible of selected element

//Change content
document.getElementById('task-title').textContent = 'Task List'; // Add or Update the content of the selected element
document.getElementById('task-title').innerText = 'My Task';// Add or Update the content of the selected element
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';// Add or Update or insert the html tags of the selected element

//It's recommended to declare the cost with document.getElementById('task-title') and then use it to avoid redundant code and use variable
const taskTitle = document.getElementById('task-title');

//document.querySelector():- No need to select by id can select by anything, can put any selectors

console.log(document.querySelector('#task-title'));//get the element having id task-title
console.log(document.querySelector('.card-title'));//get the element having class card-title
console.log(document.querySelector('h5'));//get the h5 element; if there is more than one h5 in the page then it gives first one
document.querySelector('li').style.color='red';// change the color of first <li> into red
document.querySelector('ul li ').style.color='red';// change the color of first <li> of first <ui> into blue

document.querySelector('li:last-child').style.color='red';// can use CSS pseudo classes to select the last <li> and change its color into red
document.querySelector('li:nth-child(3)').style.color='green';// can use CSS pseudo classes to select the nth <li> and change its color into green
document.querySelector('li:nth-child(4)').textContent='Hello Words';// can use CSS pseudo classes to select the nth <li> and change its text
document.querySelector('li:nth-child(odd)').style.background ='#ccc';// can use CSS pseudo classes to select the 1st odd <li> because it's a 
                                                                    //single selector and change the background color
document.querySelector('li:nth-child(even)').style.background ='#f4f4f4';// can use CSS pseudo classes to select the 1st even <li> because 
                                                                        //it's a single selector and change the background color 
