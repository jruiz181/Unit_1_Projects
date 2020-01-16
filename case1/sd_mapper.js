/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/
// makes javascript not work if theres a problem
"use strict"
//  creates a new variable
var thisTime = new Date
var timeStr = thisTime.toLocaleString();
// gets timestamp id from html to equal date variable;

document.getElementById("timeStamp").innerHTML= timeStr;
// gets hours and months from the date
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
// fromula to plug in new images every so often
var mapNum = (2 * thisMonth + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png'/>";
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr)