let a = document.getElementById("ram")
a.textContent = " Ram "

let b = document.getElementsByClassName("container")[0]
b.style.backgroundColor= "Green"     

let newDiv = document.createElement("div")
newDiv.innerHTML = "Hey I am Jitesh";
newDiv.style.backgroundColor = "red" 

document.body.appendChild(newDiv)


// Create a new li element
let newListItem = document.createElement("li");

// Set the content of the new li element
newListItem.innerHTML = "Item 3";

// Select the ul element
let ul = document.getElementById("myList");

// Append the new li element to the ul
ul.appendChild(newListItem);


let removeEl = document.getElementById("myList")
removeEl.remove()

let lastchid = document.getElementById("ram")
let removeLastchild = lastchid.lastChild;
removeLastchild.remove();

let selectimg = document.querySelector("#img1")
selectimg.src="https://i.natgeofe.com/n/726708f7-f79d-47a5-ba03-711449823607/01-balance-of-nature.jpg"

document.getElementById("colorSet").style.color="blue";



document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textElement').textContent = 'This is the new text!';
  });

document.getElementById('borderElement').addEventListener('mouseover', function() {
    this.style.borderColor = 'red';
  });
document.getElementById('borderElement').addEventListener('mouseout', function() {
    this.style.borderColor = 'black';
  });  