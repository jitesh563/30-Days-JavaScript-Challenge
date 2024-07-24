document.getElementById("changetextbutton").addEventListener('click' , function () {
    document.getElementById("changeText").textContent = "This is new text"
})

document.getElementById("changevisibility").addEventListener('dblclick' , function(){
    document.getElementById("visibility").style.display='block'
})

document.getElementById("mouseover").addEventListener('mouseover' , function(){
    document.getElementById("mouseover").style.backgroundColor="blue"
})

document.getElementById("mouseover").addEventListener('mouseout', function (){
    document.getElementById("mouseover").style.backgroundColor="aquamarine"
})



const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
  console.log(` ${e.code}`)
}

const input1 = document.querySelector("#keyup");
const log2 = document.getElementById("printkeyup");

input1.addEventListener("keyup", logKey1);

function logKey1(e) {
  log2.textContent += ` ${e.code}`;
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object from the form
    const formData = new FormData(event.target);

    // Log the form data to the console
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
});

document.getElementById('mySelect').addEventListener('change', function(event) {
    const selectedValue = event.target.value; // Get the selected value
    document.getElementById('display').textContent = `Selected: ${selectedValue}`; // Display the selected value in the paragraph
});


document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`You clicked on ${event.target.textContent}`);
    }
});

document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('.child')) {
        console.log(`Child element clicked: ${event.target.textContent}`);
    }
});

document.getElementById('addChild').addEventListener('click', function() {
    const newChild = document.createElement('div');
    newChild.className = 'child';
    newChild.textContent = 'New Child';
    document.getElementById('parent').appendChild(newChild);
});
