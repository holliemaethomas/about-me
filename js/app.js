'use strict'
// global
var userPoints = 0

var greeting = alert('Hello there! my name is Hollie')
var extraPoints = alert('but there are some who call me Tim!')
var userName = prompt('What is your name?')
console.log('the user entered ' + userName)
var warn = prompt('ok ' + userName + ' we are going to play a little guessing game about me')

var questOne = prompt('Did I grow up in Washington? Please answer Y or N').toUpperCase()
if (questOne === 'N') {
  alert('You scored your first point! I grew up in Cool, California. it is a real town. google it!')
  userPoints += 1
} else {
  alert('nope! I grew up in Cool, CA. it is a real town. google it! '); }
console.log('the user entered ' + questOne + ' user has ' + userPoints)

var questTwo = prompt('Is my favorite music is metal?').toUpperCase()
if (questTwo === 'Y') {
  alert('Yup! I am the mom at the metal show. Good job those points are adding up!')
  userPoints += 1
} else {
  alert('Metal really is my favorite, especially Death Core and Black')
}
console.log('the user entered ' + questTwo + ' user has ' + userPoints);

var questThree = prompt('Was I ever in the military?').toUpperCase()
if (questThree === 'Y') {
  alert('I served six years in the army')
  userPoints += 1
} else {
  alert('oh, sorry but I did')
}
console.log('the user entered ' + questThree + ' user has ' + userPoints);

var questFour = prompt('Are chocolate chip cookies my favorite?').toUpperCase()
if (questFour === 'Y') {
  alert('Tricked ya! i dont like cookies. at all. ever.');
  userPoints += 1
} else {
  alert('Tricked ya! i dont like cookies. at all. ever.');
}
console.log('the user entered ' + questFour + ' user has ' + userPoints);

var questFive = prompt('Do I have animals?').toUpperCase()
if (questFive === 'Y') {
  alert('I have two dogs and a big stupid cat');
  userPoints += 1
} else {
  alert('oh dear... I have three. Four if you count the toddler');
}
console.log('the user entered ' + questFive + ' user has ' + userPoints);

alert('well ' + userName + ' you scored a total of ' + userPoints + + ' points ' + ' not bad!');