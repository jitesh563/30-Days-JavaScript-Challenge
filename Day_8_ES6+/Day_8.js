let person1 = "Ram";
let age1 = 29;
let temp1 = `${person1} is ${age1} years old . `
console.log(temp1)

let multi_line = `
Ram is going
to school.`
console.log(multi_line);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;
console.log(`${fruit1} , ${fruit2}`);

const person = {
    name : 'Ram',
    age : "34",
    occupation : 'farmer'
}

let {name, age} = person;
console.log(`${name} is ${age} year old`);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
let SpredArray = [...q1 , ...q2];
console.log(SpredArray);


// rest 
function restEx (...theArg ){
    let total = 0;
    for(let arg of theArg){
        total += arg;
    }
    return total;
}

let sum = restEx(1,2,3,4,5,6,7);
console.log(sum)

function sumWithDefault (first, second=23){
    return first + second

}

console.log(sumWithDefault(7))
console.log(sumWithDefault(7,10))


// Enhanced object litral


var a = 5;
var b = 6;
var numFun = function(){
    console.log(9);
}

let number = {a,b,numFun}
console.log(number.numFun());

var name2 = "Duke"; 
var color = "Brown"; 
var age2 = 5; 
  
// Using Object Literal Enhancement 
// Combines all variables into a dog object 
var dog = {name2, color, age2}; 
console.log(dog);