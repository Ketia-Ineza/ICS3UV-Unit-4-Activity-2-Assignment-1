/*
Name: Ketia
Date: 2025-12-10
Assignment: Sum of Integers Inside and Outside a Range
Program: Calculate sums of integers inside and outside a range
*/
const start = +prompt("Enter an integer for the start of the range:")!;
const end = +prompt("Enter an integer for the end of the range:")!;

let sumInside = 0;
let sumOutside = 0;
let num: number;

do {
  num = +prompt("Enter an integer or zero (0) to end:")!;

  if (num === 0) {
    break;
  }

  if (num >= start && num <= end) {
    sumInside = sumInside + num;
  } else {
    sumOutside = sumOutside + num;
  }
} while (num !== 0);

console.log("The sum of the integers inside the range is " + sumInside);
console.log("The sum of the integers outside the range is " + sumOutside);