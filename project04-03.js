//Step 3: add strict
"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
       Step 1: Info and rename
      
      Author: Matney Moller
      Date:   4/24/2025

      Filename: project04-03.js
*/

// Maximum Length of Review
//Step 8: Change max character count to 1000 since it works
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
//Step 6: Fix
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);

   //Step 4: statement
   if (charCount > MAX_REVIEW) {
      try {
         throw "You have exceeded the character limit";
      } 
      catch (err) {
         warningBox.innerHTML = err;
      } 
      //Step 6: Fix
      finally {
         wordCountBox.innerHTML = charCount;
      }
   }
}
//Step 7: Displays error when character limit exceeded 








/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}