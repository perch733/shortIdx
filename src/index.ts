"use strict";

interface RandomGenerator {
  (limit: number): string;
}

const ShortIdx: RandomGenerator = (limit = 9) => {
  const character =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  const myArray = Array.from(character);
  let ctr = myArray.length;
  let temp: string, index: number;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = myArray[ctr];
    myArray[ctr] = myArray[index];
    myArray[index] = temp;
  }
  return myArray.join("").slice(0, limit).toString();
};

const RandomIdx: RandomGenerator = (limit = 11) => {
  const character =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  const myArray = Array.from(character);
  let ctr = myArray.length;
  let temp: string, index: number;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = myArray[ctr];
    myArray[ctr] = myArray[index];
    myArray[index] = temp;
  }
  return myArray.join("").slice(0, limit).toString();
};

export { ShortIdx, RandomIdx };
