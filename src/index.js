"use strict";

function ShuffleX(arrayX, limit) {
  let ctr = arrayX.length;
  let temp;
  let index;

  /* Mientras haya elementos en el array */
  while (ctr > 0) {
    /* Elegimos un numero para el índice aleatorio */
    index = Math.floor(Math.random() * ctr);
    /* Disminuimos ctr en 1 */
    ctr--;
    /* E intercambiamos el último elemento con él. */
    temp = arrayX[ctr];
    arrayX[ctr] = arrayX[index];
    arrayX[index] = temp;
  }
  return arrayX.slice(0, limit);
}

/* función con letras y números */
function ShortIdx(limit = 9) {
  const character =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  /* convertimos el string en array */
  let myArray = [...character];
  /* barajamos el array y lo guardamos en una variable */
  let shuffleArray = ShuffleX(myArray);
  /* agregamos el limite y lo volvemos como string */
  let result = shuffleArray.slice(0, limit).join("");

  return result;
}

/* función con letras, números y símbolos */
function RandomIdx(limit = 9) {
  const character =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  /* convertimos el string en array */
  let myArray = [...character];
  /* barajamos el array y lo guardamos en una variable */
  let shuffleArray = ShuffleX(myArray);
  /* agregamos el limite y lo volvemos como string */
  let result = shuffleArray.slice(0, limit).join("");

  return result;
}

module.exports = {
  ShortIdx,
  RandomIdx,
  ShuffleX,
};
