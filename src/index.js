"use strict";
function shortIdx(limit = 9) {
  const character =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  const myArray = Array.from(character);
  let ctr = myArray.length;
  let temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = myArray[ctr];
    myArray[ctr] = myArray[index];
    myArray[index] = temp;
  }
  return myArray.join("").slice(0, limit).toString();
}

module.exports = {
  shortIdx,
};
