
//Write a program that takes a user’s input and prints the numbers from one to the number the user entered.
//  However, for multiples of three print Fizz instead of the number and for the multiples of
//  five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

const prompt = require('prompt-sync')();

let number = prompt("Enter a number:" )
num = parseInt(number)

if (num %3 == 0){
  console.log("Fizz")
}
if(num %5 == 0){
    console.log("Buzz")

}
else{
    for (let i = 1; i <= num; i ++) {
    console.log(i)
    i ++}
}
