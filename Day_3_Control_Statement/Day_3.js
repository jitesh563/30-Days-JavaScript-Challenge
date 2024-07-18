// activity 1 

let a =5;

if (a>0) {
    console.log('Number is Positive');
} else if(a==0) {
    console.log("Number is Zero");
} else{
    console.log("Number is negative");
}

let age = 19;

if (age>= 18) {
    console.log("You are eligible to vote");
    
} else {
    console.log("You are not eligible to vote");
    
}

// activity 2 

let x=5;
let y = 4;
let z = 7;

if(x>y && x>z){
    console.log("x is greater");
}else if (y>x && y>z){
    console.log("y is greater");
} else {
    console.log("z is greater");
}


// activity 3

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log(day);
      break;
    case 1:
      day = "Monday";
      console.log(day);
      break;
    case 2:
       day = "Tuesday";
       console.log(day);
      break;
    case 3:
      day = "Wednesday";
      console.log(day);
      break;
    case 4:
      day = "Thursday";
      console.log(day);
      break;
    case 5:
      day = "Friday";
      console.log(day);
      break;
    case 6:
      day = "Saturday";
      console.log(day);
  }


  let marks = 79;

  switch (true) {
    case (marks > 90 && marks <=100):
        console.log('A');
        break;
    case (marks > 80 && marks <=90):
        console.log('B');
        break;
    case (marks > 70 && marks <=80):
        console.log('C');
        break;
    case (marks > 60 && marks <=70):
        console.log('D');
        break;            
  
    default:
        console.log('F')
        break;
  }


// activity 4

let num = 7;

if(num%2 == 0){
    console.log("Number is even")
}else{
    console.log('Number is Odd');
}


// activity 5

let year = 2024;

if((year%4 == 0 && year!=100 ) || ( year % 400 == 0)){
    console.log('Leap year');
} else {
    console.log('Not leap year');
}







