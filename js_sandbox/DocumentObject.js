let val;
//PROPERTIES

val = document;//Gives entire document includes html, head, title, body tag etc
val = document.all;// Return html collection inside bracker with comma seperated, looks similar to array  but it's not an array; cann't perform forEach in it.
val = document.all[0];// Gives 0th element i.e. html
val = document.all[1];//Gives 1st element i.e. head and so on...
val = document.all.length; // Gives no of all elements in the DOM
val = document.head;// Returns head tag
val = document.body;//Returns body tag
val = document.doctype;// Gives the doctype
val = document.domain;// Give ip address in our case will get loopback address 127.0.0.1
val = document.URL;// Gives the full address like http://127.0.0.1:5500/Index1.html
val = document.characterSet;// UTF-8
val = document.contentType;// text/html

//SELECT without selector

val=document.forms;// Returns collection of form
val=document.forms[0];// return 0th form
val=document.forms[1];//undefined bcz there is only one form in html
val=document.forms[0].id;//Return the id of 0th form
val=document.forms[0].method;// Returns the html method type i.e. GET,POST
val=document.forms[0].action;//Returns form action

val=document.links;//Returns collection of links
val=document.links[0];//Return 0th link
val=document.links[0].id;//Returns the id of 0th link
val=document.links[0].className;//Returns the className of 0th link
val=document.links[0].classList;//Returns the collection of classes for 0th link
val=document.links[0].classList[0];//Specific class from collection class 

val=document.images;//Returns collection of images

val=document.scripts;//Returns collection of scripts
val=document.scripts[2].getAttribute('src');//return the src attribute value of 3rd script tag

let scripts=document.scripts;
//Since document.scripts returns collection of scripts but its not an array so will get error in forEach 
// scripts.forEach(function(script){
//    console.log(script);  //Error: script.forEach is not a function
// });

let scriptsArr=Array.from(scripts)// to convert script collection to array

scriptsArr.forEach(function(script){
    console.log(script) //can loop all the script tag now
    console.log(script.getAttribute('src'));// Give the value of src attribute for all script tag
    });

console.log(val); 