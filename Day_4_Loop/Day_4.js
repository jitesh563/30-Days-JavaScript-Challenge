for(let i=1; i<11; i++){
    console.log(i);
}

for(let i = 1 ; i<=10; i++ ){
    console.log(5*i);
}

let x=10;
let sum = 0;
while(x>=1){
    sum = sum + x;
    if(x==1){
      console.log(sum);  
    }
    x--;
}

let y=10;
while(y>=1){
    
    console.log(y);  
    
    y--;
}


let num1= 1;
do{
    console.log(num1);
    num1++;
}
while(num1<=5);

let num2 = 5;
let fact = 1;
do{
   
   fact *= num2;
   if (num2==1) {
     console.log(fact);
   }
   num2--;
}
while(num2>=1)


for(let i=1; i<=5; i++ ){
    for (let j = 0; j < i ; j++){
        console.log('*');
       
    }
    console.log('\n');
}    

for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

for(let i=1; i<11; i++){
    if(i==7){
        break;
    }
    console.log(i);
}
   

