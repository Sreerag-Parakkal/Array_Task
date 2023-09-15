// Assignment 27/03/2023

//--------Question 1------
let r = require('readline-sync');
// Dynamically accept your name as input and convert it to upper case
let name = r.question('Enter your name ');
let uCase = name.toUpperCase();
console.log(uCase);
//--------Question 2------
// Dynamically accept your name as input and convert it to lower case
let dName = r.question('Enter your name ');
let lCase = dName.toLowerCase();
console.log(lCase);
//--------Question 3-------
// Print how many times each repeating each character in this string
var text = "ABCDAAB";
var count = {};
text.split('').forEach((ele)=> {
  count[ele] = count[ele] ? count[ele] + 1 : 1;
});
console.log(count);