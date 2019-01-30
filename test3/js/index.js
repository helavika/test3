'use strict'

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

console.log(alphabet.slice(0, 12));

console.log(alphabet.slice(12, 23));

console.log(alphabet.slice(23));

console.log(alphabet[Math.floor(Math.random()*alphabet.length)]);

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max+1 - min))
}

console.log(alphabet[Math.floor(Math.random()*12) + 1], alphabet[generateRandomInteger(12, 23)], alphabet[generateRandomInteger(23, alphabet.length-1)]);