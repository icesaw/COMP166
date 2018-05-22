"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   The Math Table Calculator
   Author: Alexey Milovanov
   Date: 4/14/2018
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/






/* ===================================================================== */

window.onload = init;

function init() {
    // Add event handlers for the calcButtons
    var calcButtons = document.getElementsByClassName("calcButton");
    for (var i = 0; i < calcButtons.length; i++) {
        calcButtons[i].onclick = buttonClick;
    }

    // Add an event listener for keydown on calc window
    document.getElementById("calcWindow").addEventListener("keydown", calcKeys);
}

function buttonClick(e) {
    // Set attributes for calculations
    var calcValue = document.getElementById("calcWindow").value;
    var calcDecimal = document.getElementById("decimals").value;
    var buttonValue = e.target.value;

    // Check which button is clicked
    switch (buttonValue) {
        case "del":
            calcValue = "";
            break;
        case "bksp":
            calcValue = eraseChar(calcValue);
            break;
        case "enter":
            calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
            break;
        case "prev":
            calcValue += lastEq(calcValue);
            break;
        default:
            calcValue += buttonValue;
    }

    // Set value of calcValue back to calcWindow
    document.getElementById("calcWindow").value = calcValue;
    document.getElementById("calcWindow").focus();
}

function calcKeys(e) {
    // Set attributes for calculations
    var calcValue = document.getElementById("calcWindow").value;
    var calcDecimal = document.getElementById("decimals").value;
    var keyValue = e.key;

    // Check which key was pressed
    switch (keyValue) {
        case "Delete":
            calcValue = "";   
            break;
        case "Enter":
            calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
            // Prevent browser from skipping a line
            e.preventDefault();
            break;
        case "ArrowUp":
            calcValue += lastEq(calcValue); 
            // Prevent browser from moving up page
            e.preventDefault();
            break;
    }

    // Set value of calcValue back to calcWindow
    document.getElementById("calcWindow").value = calcValue;
}

/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}