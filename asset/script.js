
// Objective: Show how to handle and respond to user interactions using events.
// Principles:
// Bind event listeners (addEventListener) to common events (e.g., click, hover, input).
// Handle form events (focus, blur, submit).
// Understand event object basics (e.g., target, preventDefault).
// Use event delegation for dynamic elements.


// what is the event why we need it (Les événements en JavaScript sont des actions représentant 
//les interactions de l'utilisateur avec des éléments d'une page web)

// what is event listener ,event handler and what is the deffrent between them:
//event listener c'est le micanisme qui  
// events type
// event objects



// events type

// 1. Mouse Events
// click: Triggered when a mouse button is clicked.
// mouseover: Triggered when the mouse pointer enters an element.
// mouseout: Triggered when the mouse pointer leaves an element.


// script
// Click event

// const eventArea = document.getElementById("eventArea");
//     const output = document.getElementById("output");

//     eventArea.addEventListener("click",function(){
//         alert("the div elemnt is clicked");
//     });
//     eventArea.addEventListener("mouseout",function(event){
//         event.target.style.background="red";
//     });
//     eventArea.addEventListener("mouseover",function(event){
//         event.target.style.background="green";
//     });

//script




// Handle form events (focus, blur, submit).

// Form Events
// submit: Triggered when a form is submitted.
// focus: Triggered when an input element gains focus.
// blur: Triggered when an input element loses focus.
// change: Triggered when the value of an input element changes (for <input>, <select>, and <textarea>).
// input: Triggered when the value of an <input> or <textarea> element is changed (fires immediately as the user types).
// reset: Triggered when a form is reset.

// 


// Understand event object basics (e.g., target, preventDefault).
//target

/* <button id="myButton">Click me</button> */

// document.getElementById("myButton").addEventListener("click", function(event) {
//     console.log("Event target:", event.target); // Outputs the button element
//     console.log("Target ID:", event.target.id); // Outputs 'myButton'
// });
//preventDefault
//stoppropagation


// Use event delegation for dynamic elements.

// // Get the parent element (the list)
// const itemList = document.getElementById("itemList");

// // Use event delegation by adding a single listener to the parent
// itemList.addEventListener("click", function(event) {
//     // Check if the clicked element is a list item
//     if (event.target.tagName === "LI") {
//         console.log("You clicked on:", event.target.textContent);
//     }
// });

// // Example: Dynamically adding a new list item
// const newItem = document.createElement("li");
// newItem.textContent = "Item 4";
// itemList.appendChild(newItem); // This item will also trigger the click event due to delegation


