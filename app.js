'use strict';
 let siteVisitor = prompt('What is your name?');
 alert('Welcome '+ siteVisitor + " think about how old you are");

 // LETTSSS GOOOO

let ageOf = prompt('How old are you?');
let age = Number(ageOf);
if (age < 120) {
  alert('You are old enough to make art');
if (age > 21) {
//  alert('You are old enough to drink and make art');
}
  score++;
}
if(age > 120) {
  alert('You can still make art');

let favoriteColor = prompt('Do you have a favorite colour (yes/no)(y/n)?');
let color = favoriteColor.toLowerCase();
if (favoriteColor === 'yes' || favoriteColor === 'y') {
  //console.log('You have a favorite colour');
  alert('You have a favorite colour');
  score++;
if (favoriteColor === 'no' || favoriteColor === 'n') {
  alert('You do not have a favorite colour');
  //console.log('You do not have a favorite colour')
}
} else {
  alert('You do not have a favorite colour');
}
}
