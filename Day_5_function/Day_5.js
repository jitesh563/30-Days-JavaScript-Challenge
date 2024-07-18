function even_odd(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}

even_odd(5);

function square(num2){
    return num2*num2;
}

let squ = square(5);

function max (num3 , num4){
    if(num3>num4){
        console.log(num3);
    } else{
        console.log(num4);
    }
}

max(4,7);

function concate (a,b){
    return (a+b);
}
let a= 'Jitesh';
let b = 'Maurya';
concate(a,b);

sum = (j,k)=> {
    return j+k;
}
sum (7,8);

specific =(char , x)=>{
    if(x.includes(char)){
        return true;
    }
    else{
        return false
    }
}

let x = 'ram';
console.log(specific('a',x));

product = (x , y=9)=>{
    console.log(x*y);
}
product(5);

greet = (person , age=30)=>{
    console.log(`Hello ${person} , Good Morning`)
}
greet ('ram');


function func1 (value1){
    console.log(value1)
}
function func2 (func1,value1){
    func1(value1);
}

func2(func1 , 9);

function function_1 (value){
    console.log(value);
}
function function_2(function_1,value){
       function_1(value);
}
function function_3(function_1,function_2,value){
       function_2(function_1,value);
}

function_3(function_1,function_2,24);
