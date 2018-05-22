"use strict";

/*
   Subsistence Shopping Cart
   Author: Alexey Milovanov
   Date:   4.25.18

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

//sets up the addItem function and adds it to the buttons on the webpage
function setupCart() {
      var addButtons = document.getElementsByClassName("addButton");
      for (var i = 0; i < addButtons.length; i++) {
           addButtons[i].addEventListener("click", addItem);   
      }
}

// adds items to shopping cart on page whenever an add to order button is clicked
// this will be added by the setupCart function
function addItem(B) {
      var foodItem = B.target.nextElementSibling;
      var foodId = foodItem.id;
      var foodDescription = foodItem.cloneNode("true");
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      for (var n = cartBox.firstElementChild; n = n.nextElementSibling; n !== null) {
            if (n.id === foodId) {
                  duplicateOrder = true;
                  n.firstElementChild.textContent++
                  break;
            }
      }
            if (duplicateOrder === false){
                  var orderCount = document.createElement("span");
                  orderCount.textContent = "1";
                  foodDescription.insertBefore(orderCount, foodDescription.firstChild);
                  cartBox.appendChild(foodDescription);
            }
}

// loads setupCart function in web page
window.addEventListener("load", setupCart)