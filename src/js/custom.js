/**************************************/
/* Custom JavaScript files supervisor */
/* //= ./common/material-init.js */
/**************************************/

$(document).ready(function() {


    // Get a reference to the <path>
var path = document.querySelector('#star-path');

// Get length of path... ~177px in this demo
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
  
});

    

});


$(document).ready(function() {


    // Get a reference to the <path>
var path = document.querySelector('#star-path2');

// Get length of path... ~177px in this demo
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
  
});

    

});