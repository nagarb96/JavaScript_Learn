for(let i=0;i<=10;i++){
    console.log(i);
}


for(let i = 10; i >=1;i--){
    console.log(i);
}

for(let i = 0; i < 5; i++){
  console.log(i);
}

for(let i = 0; i < 5; ++i){
  console.log(i);
}

let x = 5;
let y = x++ + 2;

console.log(y); 
console.log(x);

let x = 5;
let y = ++x + 2;

console.log(y);
console.log(x);

let i = 5;
console.log(i++);
console.log(i);

let i = 5;
console.log(++i);
console.log(i);


let user = 7;
let user = 30;
for(let i=1;i<=user;i++){
    console.log(i);
}

for(let i =1; i <= 20; i++){
    if (i % 2 === 0){
        console.log("Even : " + i);
    }
    else {
        console.log("Odd :"+ i );
    }
}

let even = 0;
let odd = 0;

for(let i=0;i<=20;i++){
    if (i % 2 === 0){
        even++;
    }
    else {
        odd++;
    }
}
console.log(even);
console.log(odd);



let user = 9;

for(let i=1;i<=10;i++){
    console.log(`${user} * ${i} = ${user * i}`);
}

for(let num = 5; num <= 10; num++ ){
    console.log(`Table of ${num}`);
    
    for(let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
    console.log(`...........${/n}`);
}

for(let num = 1; num <= 10; num++ ){

    let row ="";
    
    for(let i = 2; i <= 5; i++){
        let text =  `${i} * ${num} = ${i * num}`;
        row += text.padEnd(15, " ");
    }
    console.log(row);
}

for(let i = 1; i <= 10; i++){
    let row = "";

    for(let table = 2; table <= 5; table++){
        let text = `${table} * ${i} = ${table * i}`;
        row += text.padEnd(20, " ");
    }
    console.log(row);
}

let fruits = ['mango','banana','grapes'];

for(let i = 0; i < fruits.length;i++){
    console.log(fruits[i]);
}

let numbers = [5, 10, 15, 20];
for (let i = 0; i < numbers.length; i++){
    if(numbers[i]>=10){
    console.log(numbers[i]);}
}
let numbers = [5, 10, 15, 20];
let max = numbers[0];
for(let i = 0; i < numbers.length;i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
}console.log(`Highest Number is ${max}`);

let marks = [55, 89, 32, 91, 67];
let max = marks[0];
let min = marks[0];

for(let i = 0; i < marks.length;i++){
    if ( marks[i] > max){
        max = marks[i];
    }
    if( marks[i] < min) {
        min = marks[i];
    }
}
console.log(`min is ${min}, Max is ${max}`);



let marks = [2, 66, 31, 911, 67];
let max = Math.max(...marks);
let min = Math.min(...marks);
console.log(`Max : ${max}, Min : ${min}`);

let marks = [2, 66, 31, 911, 67];
let max = marks.reduce((a,b)=>a>b?a:b);
let min = marks.reduce((a,b)=>a<b?a:b);

console.log(`Max : ${max}, Min : ${min}`);

function add(a,b) {
    return a+b;
}

console.log(add(4,5));

let add = (a,b) => a+b;
console.log(add(25,24));

for (let i=0;i<=5;i++){
    console.log(i);
}

let arr = ["box","square","circle"];
for (let value of arr){
    console.log(value);
}


for(let i=10; i >= 1; i--){
    let row = "";
    for(let table =2;table <=5;table++){
        let text = `${table} * ${i} = ${table * i}\t`;
        row += text;
    }
    console.log(row);
}


for(let i =1;i<=10;i++){
    let stars = "";
    for(let j=1; j <= i; j++){
        stars += "*";    
    }
    console.log(stars);
    
    for(let i =10;i>=1;i--){
    let stars = "";
    for(let j=1; j <= i; j++){
        stars += "*";    
    }
    console.log(stars);
    
}
}

for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBUzzz");
    }
    else if (i % 3 === 0 ){
        console.log("Fizz");
    }
    else if (i % 5 === 0 ){
        console.log("Buzz")
    }
    else {
        console.log(i);
    }

}


let secret = 7;
let guess = 7;

if(guess < secret){
    console.log("Thoda bda socho.........")
}
else if (guess > secret){
    console.log("thoda chota number socho.....")
}
else {
    console.log("Yeh! You got it.....")
}


let secret = 10;
let guess = 10;

while(guess !== secret){
    if(guess > secret){
        console.log("Too High");
    }
    else{
        console.log("Too Low");
    }
    break;
}
if(guess === secret){
    console.log("Correct Guess 🎉");
}


let secret = Math.floor(Math.random() * 10) + 1;
console.log("Secret:", secret); // test ke liye

let guess = 5;

if(guess === secret){
    console.log("Correct!");
}
else if(guess > secret){
    console.log("Too High");
}
else{
    console.log("Too Low");
}

let ary = [10,20,40,50,90];

for(let i = 1;i<=10;i++){
    let row ="";
    for(star = 1; star <= i; star++){
        row += "*";
    }
    console.log(row);
}

// Find Array Highest and second Highest

let numbers = [10,50,80,20,43];

let max = -Infinity;
let secondMax = -Infinity;

for(let i = 0; i <= numbers.length;i++){
    if(numbers[i] > max){
        secondMax = max;
        max = numbers[i];
    }
    else if(numbers[i]>secondMax && numbers[i] !== max){
        secondMax = numbers[i];

    }
}
console.log("H :" + max);
console.log("S-H :" + secondMax);


let numbers = [10,90,2,45,33];

numbers.sort((a,b) => a - b);
console.log(numbers);
console.log(numbers[1]);

for(let i = 1; i<=10;i++){
    if (i % 2 === 0){
        console.log(`${i} is odd`);
    }
    else {
        console.log(`${i} is even`);
    }
}


for(let i = 1; i <= 10; i++){
    let row = "";
    for(let table = 2; table <= 10; table++){
        let text = `${table} * ${i} = ${table * i}\t\t\t`;
        row += text;
        
    }
    console.log(row);
}


let sum = 0;

for(let i = 1; i<=100;i++){
    sum += i;
}
console.log(sum);


let num = 7;
let isPrime = true;

for(let i = 2;i < num;i++){
    if (num % i === 0){
        isprime = false;
        break;
    }
}
if(isPrime) {
    console.log("Prime Number");
}
else{
    console.log("Not Prime")
}


function isPrimeNumber(num){
    let isPrime = true;

    for(let i=2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log("Prime Number")
    }
    else{
        console.log("Not Prime")
    }
}
isPrimeNumber(31);


for(let i=2; i<=20;i++){

let isPrime = true;

    for(let j=2;j<i;j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
    }
}

for(let i=1;i<=10;i++){
    let row = "";
        for(let j=1;j <= i;j++){
            row += "*";
}
    console.log(row);
}
