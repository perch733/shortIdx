"use strict";

function ShuffleX(arrayX, limit) {
  let ctr = arrayX.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arrayX[ctr];
    arrayX[ctr] = arrayX[index];
    arrayX[index] = temp;
  }
  return arrayX.slice(0, limit);
}

/* función con letras y números */
function ShortIdx(limit = 7) {
  const character =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  let myArray = Array.from(character);

  let shuffleArray = ShuffleX(myArray);

  let result = shuffleArray.join("").slice(0, limit).toString();

  return result;
}

/* función con letras, números y símbolos */

function RandomIdx(limit = 7) {
  const character =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let myArray = Array.from(character);

  let shuffleArray = ShuffleX(myArray);

  let result = shuffleArray.join("").slice(0, limit).toString();

  return result;
}

module.exports = {
  ShortIdx,
  RandomIdx,
  ShuffleX,
};
