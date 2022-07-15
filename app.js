'use strict';
 let siteVisitor = prompt('What is your name?');
 alert('Welcome ' + siteVisitor)! Think about the temperature where you are;

 // LETTSSS GOOOO

 let score = 0;

 function temperature() {
   let temperature = prompt('What is the temperature outside?');
   if (temperature > 70) {
     alert('It is too hot outside.');
     //console.log('It is too hot outside.');
   } else if (temperature < 70) {
     alert('It is too cold outside.');
     //console.log('It is too cold outside.');
   } else {
     alert('It is just right outside.');
     //console.log('It is just right outside.');
   }
 }