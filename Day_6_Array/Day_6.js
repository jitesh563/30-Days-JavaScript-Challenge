let arr = [1,2,3,4,5];
console.log(arr)

console.log(arr[0],arr[arr.length-1]);

arr.push(6)
console.log(arr)

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(2);
console.log(arr);

var myArray = [1, 2, 3, 4, 5];
var multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]


let arr2=[2,3,4,5,6,7,8,9];
let newarr2 = arr2.filter(function(element){
    return element%2 == 0;
});
console.log(newarr2);

var myArray1 = [1, 2, 3, 4, 5];
var sum = myArray1.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum); // 15

let MyArray2 = [23,34,43,67,89];
for (let i = 0; i < MyArray2.length; i++) {
    const element = MyArray2[i];
    console.log(element);
    
}

MyArray2.forEach(element => {
    console.log(element);
});

let MyArray3 = [
    [1,2,3],
    [23,12,21],
    [45,5,34]
];

for(let i=0; i< MyArray3.length; i++){
    for(let j = 0; j< MyArray3[i].length; j++){
        console.log(MyArray3[i][j]);
    }
}

console.log(MyArray3[2][2])