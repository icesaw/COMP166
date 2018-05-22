/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Alexey Milovanov
   18SP-COMP-166-800RL
*/

 
/* time variable holding the specified date*/
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
    
/* displays the specified date and time */
document.getElementById("timeStamp").innerHTML = timeStr;

/* determines skymap time*/
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();    
var mapNum = (2 * thisMonth + thisHour) % 24;

/* determines the sky image based on the time */
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

/* shows the determined sky image */
var temp = document.getElementById("planisphere");
temp.insertAdjacentHTML('afterbegin', imgStr);