"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomIdx = exports.ShortIdx = exports.ShuffleX = void 0;
/* function para barajar los arrays */
function ShuffleX(arrayX, limit) {
    var ctr = arrayX.length;
    var temp;
    var index;
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
exports.ShuffleX = ShuffleX;
/* function para generar id */
function ShortIdx(limit) {
    if (limit === void 0) { limit = 7; }
    var character = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '_'];
    var shuffleArray = ShuffleX(character, limit);
    var result = shuffleArray.join("").slice(0, limit);
    return result;
}
exports.ShortIdx = ShortIdx;
/* function para generar id con símbolos util para contraseñas */
function RandomIdx(limit) {
    if (limit === void 0) { limit = 7; }
    var character = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '_', '!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
    var shuffleArray = ShuffleX(character, limit);
    var result = shuffleArray.join("").slice(0, limit);
    return result;
}
exports.RandomIdx = RandomIdx;
