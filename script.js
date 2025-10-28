//PRACTICE TASK

//🟢Easy (Beginner Level)


// 1. Greeting Function

//name=prompt("Enter your name:")
// function greet(name){
//     return(`Hello,${name}! Welcome to javasript`)
// }
// console.log(greet(name));



// 2. Sum of Two Numbers

// a=parseInt(prompt("Enter any number:"));
// b=parseInt(prompt("Enter any number:"));
// function greet(a,b){
//  return(a+b)
// }
// console.log(greet(a,b));



// 3. Default Parameters


// function greet(a,b=2){
//  return(a*b)
// }
// console.log(greet(5));



//🟡 Medium (Intermediate Level)
//4. Find Maximum of Three Numbers


//a=parseInt(prompt("Enter any number:"));
// b=parseInt(prompt("Enter any number:"));
// c=parseInt(prompt("Enter any number:"));

// function findmax(a,b,c){
//     if(a>b&&a>c){
//       console.log(`${a} is the greater number`) 
//     }
//     else if(b>a&&b>c){
//       console.log(`${b} is the greater number`) 
//     }
//      else if(c>b&&c>a){
//       console.log(`${c} is the greater number`) 
//     }  
//     else{
//       console.log("number is invalid") 
//     }
// }
// findmax(a,b,c);



// 5. Count Words in a Sentence

//sentence=prompt("Enter any sentence:")
// function countWords(sentence){
//   count=sentence.split(" ")
//   return(count.length)
// }
// console.log(countWords(sentence));



//6. Check Even or Odd

// a=parseInt(prompt("Enter any number:"));
// myFunction = (a) =>{
// if(a%2==0){
//     console.log("True")
// }
// else{
//     console.log("False")
// }
// }
// myFunction(a)



//7. Calculate Factorial

// a=parseInt(prompt("Enter any number:"));
// const factorial = (a) => {
//   let facts = 1;
//   for (let i = 1; i <= a; i++) {
//     facts = facts * i;
//   }
//   return facts;
// }

// console.log(factorial(a));



// 🔵 Difficult (Advanced / Logical Thinking)

//8. Count Vowels in a String

// char=prompt("Enter any word:");
//  let vowel=[]
//  function countVowels(char){
//  for(let i=0;i<=char.length;i++){
//      if(char[i]=="a"||char[i]=="A"||char[i]=="e"||char[i]=="E"||char[i]=="i"||char[i]=="I"||char[i]=="o"||char[i]=="O"||char[i]=="u"||char[i]=="U"){
//          vowel.push(" ")
//      }
// }
// }
// countVowels(char);
// console.log(vowel.length)



//9. Create a function to check prime number

// num=parseInt(prompt("Enter any number:"));
// function isPrime(num){
//     if(num==2||num==3||num==5||num==7){
//         console.log(true)
//     }
//     else if(num%2==0||num%3==0||num%5==0||num%7==0||num==0||num==1){
//         console.log(false)
//     }
//     else{
//          console.log(true)
//     }
// }
// isPrime(num);



// 10. Closure Counter


// function closure(){
//     count=0;
    
//     function stop(){
//         count++
//         console.log(count)
//     }

//     return stop;
// }
// const counter= closure();
// counter();
// counter();






// MINI PROJECT


//🎯 Mini Project 1 – Simple Calculator


// let num1=prompt("Enter first number :")
// let num2=prompt("Enter second number :")
// let operator=prompt("Enter the operation :")
//     if(operator=='+'){
//         console.log(num1+num2);
//     }
//     else if(operator=='-'){
//         console.log(num1-num2);
//     }
//     else if(operator=='*'){
//         console.log(num1*num2);
//     }
//     else if(operator=='%'){
//         console.log(num1%num2);
//     }
//     else if(operator=='/'){
//          console.log(num1/num2);
//     }
//     else{
//         console.log ("give proper operator")
//     }



//🎯 Mini Project 2 – Student Grade Evaluator



// let marks = prompt("Enter your mark out of hundred:");
// marks = parseInt(marks);
// function getGrade(marks) {
//     switch (true) { 
//         case (marks >= 90):
//             grade = "Your Grade is A";
//             break;
//         case (marks >= 80):
//             grade = "Your Grade is B";
//             break;
//         case (marks >= 70):
//             grade = "Your Grade is C";
//             break;
//         case (marks >= 60):
//             grade = "Your Grade is D";
//             break;
//         default: 
//             grade = "You failed";
//             break;
//     }
//     return grade;
// }
// let finalGrade = getGrade(marks);
// console.log(finalGrade);


//🎯 Mini Project 3 – Random Quote Generator


// I refered this code in chatgpt...

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>js</title>
// </head>

// <body>
//     <center>
//         <h1>Random Quote Generator</h1>
//         <p id="Display"></p>
//         <button id="Button">Get Random Quote</button>
//     </center>
//     <script>
//         let quotes = [
//             "Every scar tells a story — not of pain, but of survival.",
//             "Silence speaks louder when your heart knows the truth.",
//             "Rise, even when the world thinks you fell. ",
//             "Some journeys begin with heartbreak but end with destiny.",
//             "Your path is yours — even if it moves slow, it still moves.",
//             "The fire inside you will always burn louder than their doubts.",
//             "Feel the storm, but never forget you are the thunder.",
//             "Don’t stop until your dream becomes your life.",
//         ];

//         document.getElementById("Button").addEventListener("click", function () {
//             let randomIndex = Math.floor(Math.random() * quotes.length);
//             document.getElementById("Display").innerText = quotes[randomIndex];
//         });
//     </script>
// </body>

// </html>





//🎯 Mini Project 4 – Temperature Converter

// value=prompt("Enter the value:")
// scale=prompt("Enter the scale:")
// function convertTemperature(value, scale){
//   if(scale=="F") {
//       let c=(value - 32) * 5/9
//       return(`Temperature in celsius is :${c}°C`)
//   }
//     else if(scale=="C") {
//       let f= (value * 9/5) + 32

//       return(`Temperature in farenheat is :${f}°F`)
//   }
// }
// console.log(convertTemperature(value, scale));
