/**
 * Name: Calculator
 * Description: calculator in JavaScript
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

// Import calculator app
const calculatorApp = require('./calculator-v1.0.0');
// define calculator function
const calculator = calculatorApp();

// Example: Let's do the math
// addition
const addNumbers = calculator.doAddition(5, 190);
console.log(addNumbers);

// substraction
const substituteNumbers = calculator.doSubstraction(80, 6);
console.log(substituteNumbers);

// multiplication
const multiplyNumbers = calculator.doMultiplication(9, 10);
console.log(multiplyNumbers);

// division
const divideNumbers = calculator.doDivision(2, 10);
console.log(divideNumbers);

// percentage
const percentageNumbers = calculator.doPercentage(600, 12);
console.log(percentageNumbers);

// square root numbers
const squareRootNumbers = calculator.doSquareroot(81);
console.log(squareRootNumbers);
