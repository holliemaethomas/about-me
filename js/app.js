'use strict'
// global
var userPoints = 0

// var greeting = alert('Hello there! my name is Hollie')
// var extraPoints = alert('but there are some who call me Tim!')
// var userName = prompt('What is your name?')
// console.log('the user entered ' + userName)
// var warn = prompt('ok ' + userName + ' we are going to play a little guessing game about me')

// var questOne = prompt('Did I grow up in Washington? Please answer Y or N').toUpperCase()
// if (questOne === 'N') {
//   alert('You scored your first point! I grew up in Cool, California. it is a real town. google it!')
//   userPoints += 1
// } else {
//   alert('nope! I grew up in Cool, CA. It is a real town. google it! '); }
// console.log('the user entered ' + questOne + ' user has ' + userPoints)

// var questTwo = prompt('Is my favorite music metal?').toUpperCase()
// if (questTwo === 'Y') {
//   alert('Yup! I am the mom at the metal show. Good job those points are adding up!')
//   userPoints += 1
// } else {
//   alert('Metal really is my favorite, especially Death Core and Black')
// }
// console.log('the user entered ' + questTwo + ' user has ' + userPoints)

// var questThree = prompt('Was I ever in the military?').toUpperCase()
// if (questThree === 'Y') {
//   alert('I served six years in the army')
//   userPoints += 1
// } else {
//   alert('oh, sorry but I did')
// }
// console.log('the user entered ' + questThree + ' user has ' + userPoints)

// var questFour = prompt('Are chocolate chip cookies my favorite?').toUpperCase()
// if (questFour === 'Y') {
//   alert('Tricked ya! i dont like cookies. at all. ever.')
//   userPoints += 1
// } else {
//   alert('Tricked ya! i dont like cookies. at all. ever.')
// }
// console.log('the user entered ' + questFour + ' user has ' + userPoints)

// var questFive = prompt('Do I have animals?').toUpperCase()
// if (questFive === 'Y') {
//   alert('I have two dogs and a big stupid cat')
//   userPoints += 1
// } else {
//   alert('oh dear... I have three. Four if you count the toddler')
// }
// console.log('the user entered ' + questFive + ' user has ' + userPoints)

// var answer = 33
// var attempts = 4
// var questSix = parseInt(prompt('Lets change it up a bit! with all this awesome life experience how old do you think I am?'))
// console.log('user entered ' + questSix)
// while (attempts > 1 && questSix !== answer) {
//   attempts--
//   questSix = parseInt(prompt('oh dear me, no. You have ' + attempts + ' tries left. Guess again.'))
//   console.log(questSix + attempts)
// }
// if (questSix == answer) {
//   alert('correct I am ' + answer)
//   userPoints += 1
// } else if (attempts == 1) {
//   alert('Well...you tried....I am 33')
// }
// console.log('the user entered ' + questSix + ' user has ' + userPoints)


var favoriteMovies = [ 'FARGO ' , 'WAR GAMES ', ' DARK CITY', ' THE LAST UNICORN ', 'NO COUNTRY FOR OLD MEN ', ' THE GOONIES'];
var movieAttempts = 6;
var questSeven = prompt('OK, last question ' + 'userName' + '. Can you guess my favorite movie? I will give you a hint: The only winning move is not to play').toUpperCase();
console.log('The user entered ' + questSeven);
for (var i = 0; i < favoriteMovies.length; i++) {
  while (movieAttempts > 1 && questSeven !== favoriteMovies.length);
  movieAttempts--;
  questSeven = prompt('That is a good movie but not my favorite, you have ' + movieAttempts + ' remaining');
  console.log(questSeven + movieAttempts);
  if (questSeven === favoriteMovies || favoriteMovies[1]) {
    alert('Yessir! ' + favoriteMovies[1] + ' is my favorite but, I would have also accepted ' + favoriteMovies);
    userPoints += 1;
  } else if (movieAttempts === 1) {
    alert('and I thought we were friends, my favorite movie is War Games but I would have accepted ' + favoriteMovies);
  }
}
