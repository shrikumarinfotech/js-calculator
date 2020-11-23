/**
 * Name: Calculator
 * Description: calculator in JavaScript/HTML
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

// Calculator HTML Prototype
// Calculator app
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

// console.log(calculatorApp().doAddition(1, 2));

// HTML Calculator functions

// Define HTML elements
// Display panel
const displayPanel = document.getElementById('display-panel');
const displayAction = document.getElementById('display-action');
// keys
const keyIs1 = document.getElementById('btn-val-1');
const keyIs2 = document.getElementById('btn-val-2');
const keyIs3 = document.getElementById('btn-val-3');
const keyIs4 = document.getElementById('btn-val-4');
const keyIs5 = document.getElementById('btn-val-5');
const keyIs6 = document.getElementById('btn-val-6');
const keyIs7 = document.getElementById('btn-val-7');
const keyIs8 = document.getElementById('btn-val-8');
const keyIs9 = document.getElementById('btn-val-9');
const keyIs0 = document.getElementById('btn-val-0');
const keyIs00 = document.getElementById('btn-value-00');
const keyIsX = document.getElementById('btn-val-x');
const keyIsDiv = document.getElementById('btn-val-/');
const keyIsSub = document.getElementById('btn-val-substract');
const keyIsPercent = document.getElementById('btn-val-percent');
const keyIsAdd = document.getElementById('btn-val-add');
const keyIsSqrt = document.getElementById('btn-val-sqrt');
const keyIsDot = document.getElementById('btn-val-dot');
const keyIsEqual = document.getElementById('btn-val-equal');
const keyIsAc = document.getElementById('btn-val-ac');

// keys with numarical values
const keysNum = document.getElementsByClassName('key-num');
const keysNumArray = Array.from(keysNum);
// keys with actions
const keysAction  = document.getElementsByClassName('key-action');
const keysActionArray = Array.from(keysAction);
// key dot
const keyDot = document.getElementsByClassName('key-dot');
// key for result
const keyResult = document.getElementsByClassName('key-result');

// Default display on begining
displayPanel.innerHTML = '0';

// Define variables for inputs
let a = 0;
let b = 0;
let actionApplied = '';
let resultApplied = '';

// Define variable for output
let result = '';

// Define display values on key press function
function displayOnKeyPress(){
    // collect numaric value keys
    // display value on click
    // maximum digits is 12
    // all should be numbers
    keysNumArray.forEach(element => {
        element.onclick = function(){
            // check for length then add value
            if(displayPanel.innerHTML.length === 1 && displayPanel.innerHTML === '0' || resultApplied === '='){
                // console.log(element.innerHTML);
                displayPanel.innerHTML = element.innerHTML;
                // reset result applied after first digit
                resultApplied = '';
            }
            else if(displayPanel.innerHTML.length < 12 || actionApplied !== ''){
                if(displayPanel.innerHTML === a.toString()){
                    displayPanel.innerHTML = element.innerHTML;
                }
                else{
                    displayPanel.innerHTML += element.innerHTML; 
                }
            }
            // else if(displayPanel.innerHTML.length < 12){
            //     displayPanel.innerHTML += element.innerHTML;
            // }
        }
    });

    // dot key function
    // display . only once
    const findadotregx = /[^\w\s]/g;
    keyIsDot.onclick = function(){
        // check if a . is already exists, only then add a dot
        // console.log(displayPanel.innerHTML[displayPanel.innerHTML.search(findadotregx)]);
        if(actionApplied !== '' && displayPanel.innerHTML.length > 1 || resultApplied === '=' ){
            displayPanel.innerHTML = '.';
            // reset result applied after first digit
            resultApplied = '';
        }
        else{
            if(displayPanel.innerHTML[displayPanel.innerHTML.search(findadotregx)] === undefined){
                displayPanel.innerHTML += '.';
            };
        }
    };

    // collect all action keys
    // display symbol on click
    // only one action at a time
    keysActionArray.forEach(element => {
        element.onclick = function(){
            // display ation symbol
            displayAction.innerHTML = element.innerHTML;
            
            // store data for calculations
            // update actionApplied variable for later usage: keyIsEqual
            actionApplied = element.innerHTML;

            // Later this action need to update for continiuos addition/ations: Optional
            // save input value to a
            a = Number.parseFloat(displayPanel.innerHTML);
            // console.log(a);

        }
    });

    // collect equal key
    // display calculated value on key press
    keyIsEqual.onclick = function(){
        // store data
        // save input value to a
        if(a === 0){
            a = Number.parseFloat(displayPanel.innerHTML);
        }
        else{
            b = Number.parseFloat(displayPanel.innerHTML);
        }
        // console.log(a);
        // console.log(b);
        // update action applied
        resultApplied = '=';
        // console.log(resultApplied);

        // Display result
        // if no action apllied, result is equal to input value
        if(actionApplied === ''){
            result = a.toString();
            // console.log(result);

            // display
            displayResult(result);
            // displayPanel.innerHTML = result.slice(0, 12);

            // reset a and b
            resetAB();
            // reset action applied
            resetActionApplied();
        }
        // + action applied for addition
        if(actionApplied === '+'){
            // calculate and save result
            result = calculatorApp().doAddition(a, b).toString();
            // console.log(result);

            // display
            displayResult(result);
            // displayPanel.innerHTML = result.slice(0, 12);

            // reset a and b
            resetAB();
            // reset action applied
            resetActionApplied();
        }
        // - action applied for substraction
        if(actionApplied === '-'){
            // calculate and save result
            result = calculatorApp().doSubstraction(a, b).toString();

            // display
            displayResult(result);
            // displayPanel.innerHTML = result.slice(0, 12);

            // reset a and b
            resetAB();
            // reset action applied
            resetActionApplied();
        }
        // / action applied for division
        if(actionApplied === '/'){
            // calculate and save result
            result = calculatorApp().doDivision(a, b).toString();

            // display
            displayResult(result);

            // reset a and b
            resetAB();
            // reset action applied
            resetActionApplied();
        }
        // * action applied for multiplication
        if(actionApplied === 'x' || actionApplied === 'X'){
            // calculate and save result
            result = calculatorApp().doMultiplication(a, b).toString();

            // display
            displayResult(result);

            // reset a and b
            resetAB();
            // reset action applied
            resetActionApplied();
        }
        // √ action applied for squareroot
        if(actionApplied === '√'){
            // calculate and save result
            result = calculatorApp().doSquareroot(a).toString();

            // dispplay
            displayResult(result);

            // reset a and b
            resetAB();
            // reset action applied
            resetActionApplied();
        }
        // % action applied for percentage
        if(actionApplied === '%'){
            // calculate and save result
            result = calculatorApp().doPercentage(a, b).toString();

            // display
            displayResult(result);

            // reset a and b
            resetAB();
            // reset action applied
            resetActionApplied();
        }

    };

    // reset all display and data on key pressed AC
    keyIsAc.onclick = function(){
        resetAll();
    };
};
displayOnKeyPress();

// Display result function
function displayResult(result){
    displayPanel.innerHTML = result.slice(0, 12);
};

// Reset a and b
function resetAB(){
    a = 0;
    b = 0;
};

// Reset action applied
function resetActionApplied(){
    // reset variable data
    actionApplied = '';
    // reset display
    displayAction.innerHTML = '';
};

// Reset all: reset display to 0
function resetAll(){
    // collect AC key
    // clear display value to display 0
    // reset display
    displayPanel.innerHTML = '0';
    // console.log('Ac key pressed');
    // reset stored data
    resetAB();
    resetActionApplied();
};
resetAll();

/**
 * Run tests
 */
function testKeyPress(){
    // define keys
    const keys = document.getElementsByClassName('key');
    // convert list of HTML elelements into an array
    const keysArray = Array.from(keys);
    // console.log(keysArray);

    // Test each key press events
    keysArray.forEach(element => {
        element.onclick = function(){
            console.log(element.innerHTML);
        }
    });
};
// testKeyPress();
