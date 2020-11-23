/**
 * Name: Calculator
 * Description: calculator in JavaScript
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

const calculatorApp = function(){
    // Define functions
    return {
        // Define function for addition
        doAddition: function doAddition(a, b){
            return a + b;
        },
        // Define function for substraction
        doSubstraction: function doSubstraction(a, b){
            return a - b;
        },
        // Define function for multiplication
        doMultiplication: function doMultiplication(a, b){
            return a * b;
        },
        // Define function for division
        doDivision: function doDivision(a, b){
            return a / b;
        },
        // Define function for percentage
        doPercentage: function doPercentage(a, b){
            return a * (b / 100);
        },
        // Define function for square root
        doSquareroot: function doSquareroot(a){
            return Math.sqrt(a);
        },
    };

};

module.exports = calculatorApp;