// DOM Manipulation
// GetElementById()
const title2 = document.getElementById('main-heading');
console.log(title);

// GetElementByClassName()
const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

// getElementsByTagName()
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// querySelector()
const container = document.querySelector('div');
console.log(container);

// querySelectorAll()
const containers = document.querySelectorAll('div');
console.log(containers);

// Changing style of text
const title1 = document.querySelector('#main-heading');
title1.style.color = 'red';
const listItems1 = document.querySelectorAll('.list-items');
for(i=0; i<listItems.length; i++) {
    listItems[i].style.fontSize = '5rem';
}
console.log(listItems);

// Creating Elements
const ul1 = document.querySelector('ul');
const li = document.createElement('li');

// Adding element
ul1.append(li)

// Modifying the text
li.innerText = 'X-men';

// Modifying attributes and classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');
const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));

// Remove Elements
li.remove();




// Traverse the DOM
//Parent Node Traversal
let ul3 = document.querySelector('ul');
console.log(ul3.parentNode.parentNode);
console.log(ul3.parentElement.parentElement);

//Child Node Traversal
let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[1].style.backgroundColor = 'blue';
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//Sibling Node Traversal
let ul = document.querySelector('ul');
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);




//Event Listeners
//Click event == element.addEventListeners("click", function);
const buttontwo = document.querySelector('.btn-2');
const alertBtn = () => {
    alert("I also love Javascript");
};
buttontwo.addEventListener("click", alertBtn);

//Mouseover event
const newBackgroundColor = document.querySelector('.box-3');
const changeBgColor = () => {
    newBackgroundColor.style.backgroundColor = 'blue';
};
newBackgroundColor.addEventListener("mouseover", changeBgColor);

// Event Propagation

// Event Delegation
