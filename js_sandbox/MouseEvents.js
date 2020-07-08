const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //Click
// clearBtn.addEventListener('click',runEvent);
// //Doubleclick
// clearBtn.addEventListener('dblclick',runEvent);
// //Mousedown
// clearBtn.addEventListener('mousedown',runEvent);
// //Mouseup
// clearBtn.addEventListener('mouseup',runEvent);
// //sequence- Mousedown->mouseUp->Click
// //Mouseenter
// card.addEventListener('mouseenter',runEvent);
// //Mouseleave
// card.addEventListener('mouseleave',runEvent);
// //Mouseover
// card.addEventListener('mouseover',runEvent);
// //Mouseout
// card.addEventListener('mouseout',runEvent);
// //mouseenter and mouseleave only get fired when we go into main element(initial element)
// //however mouseout and mouse over will fire off when we go into another element that's inside of that element

//Mousemove
card.addEventListener('mousemove', runEvent);//event get fire at any movement of the mouse inside the element.
// It doesn't fire at the movement outside of the selected elemnet


//Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;
    card.style.background=`rgb(${e.offsetX},${e.offsetY},40)`;
}