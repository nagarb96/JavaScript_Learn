for(let i=0; i<= 10;i++){
    console.log(i);
}
// Today i will learn Array uses

let numbers = [10, 20, 30, 40];     // Create an Array

let numbers = [10, 20, 30, 40];     // Access any array use thos console.log code.
console.log(numbers[0]);            // Always Array start from 0 to last array length count.
console.log(numbers[2]);

let numbers = [10, 20, 30, 40];     // 
console.log(numbers.length);        // Know the length of the array

let numbers = [10, 20, 30, 40];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}                                   // This code use, you can write and print all array in console.

let numbers = [10, 20, 30, 40];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];              // Know the array sum and more maths formula to check different different answer.
}
console.log(sum);

// Lets start the Practice test

let numbers = [5,10,15,20];

// Question 1: Print the all numbers in console.
// Answer : 
let numbers = [5,10,15,20];
for(let i = 0; i < numbers.length; i++){ 
    console.log(numbers[i]); 
}
// Answer output is : 5, 10, 15, 20 in vertically format without any comma's

// Question 2: Lets Calculate the all numbers Sum.
// Answer is :
let numbers = [5,10,15,20]; 
let sum = 0; 

for(let i = 0; i < numbers.length;i++){ 
    sum += numbers[i]; 
} 
console.log(sum);

// Answer Output is : 50

// Question 3: Print only Even Numbers.
let numbers = [5,10,15,20]; 
for(let i = 0; i < numbers.length; i++) { 
    if( i % 2 !== 0){ 
        console.log(numbers[i]); 
    } 
}
// Answer Output is : 10,20

// Question 4 Find the Largest Number..
let numbers = [8,3,12,5,20];
let max = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log("Largest:", max);

// Question 5 Find the Smallest Number..
let numbers = [8,3,12,5,20];
let min = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < min){
        min = numbers[i];
    }
}
console.log("Smallest:", min);

// Question 6 : Count the Even Number..
let numbers = [8,3,12,5,20];
let count = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        count++;
    }
}
console.log("Even count:", count);








let arr = [4,9,2,11,6];
let max = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(`Largest Number is: ${max}`);


let arr = [4,9,2,11,6];
let min = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(`Smallest Number is: ${min}`);


let arr = [4,9,2,11,6];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(`Total Number Sum is: ${sum}`);



//  Now Start Array Methods pop, push, shift, unshift, includes

let fruits = ["apple","banana"];
fruits.push("mango");                   // Add the last values in array use push methods.
console.log(fruits);

let fruits = ["apple","banana"];
fruits.unshift("orange");                   // Add the beginning values in array use unshift methods.
console.log(fruits);

let fruits = ["apple","banana"];
fruits.pop();                   // Remove values in array use pop methods.
console.log(fruits);

let fruits = ["apple","banana"];
console.log(fruits.includes("apple"));                   // Check values exits in array. Use Includes method

let fruits = ["apple","banana"];
fruits.splice(1,1);                                      // remove specific values in array use splice methods.
console.log(fruits);


//  Now Start Array manipulation powerful tools is slice(), splice(), reverse(), sort()

let numbers = [10,20,30];
let numbers = [10,20,30];
numbers.push(40);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.pop()
console.log(numbers);

console.log(numbers.includes(20));
