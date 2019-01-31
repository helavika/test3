'use strict'

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

var string = alphabet.slice(0, 12);

var string1 = alphabet.slice(12, 23);

var string2 = alphabet.slice(23);

console.log(string, string1, string2);

console.log(alphabet[Math.round(Math.random()*alphabet.length-1)+1]);

function generateRandomInteger(min, max) {
  return Math.round(min + Math.random()*(max - min))
}

console.log(alphabet[Math.round(Math.random()*11) + 1], alphabet[generateRandomInteger(12, 22)], alphabet[generateRandomInteger(23, alphabet.length-1)]);
