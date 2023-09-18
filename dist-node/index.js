"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomIdx = exports.ShortIdx = exports.ShuffleX = void 0;
// Función para barajar un array
var ShuffleX = function (array, limit) {
    var _a;
    var shuffled = __spreadArray([], array, true);
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [shuffled[j], shuffled[i]], shuffled[i] = _a[0], shuffled[j] = _a[1];
    }
    validateLimit(limit, array.length);
    return shuffled.slice(0, limit);
};
exports.ShuffleX = ShuffleX;
// Función para validar el límite
var validateLimit = function (limit, maxLimit) {
    if (limit < 1 || limit > maxLimit) {
        throw new Error("El l\u00EDmite debe estar entre 1 y ".concat(maxLimit));
    }
};
// Función interna para generar un identificador
var generateId = function (characters, limit) {
    if (limit === void 0) { limit = 7; }
    var maxLimit = characters.length;
    validateLimit(limit, maxLimit);
    var charactersArray = characters.split("");
    var shuffledArray = (0, exports.ShuffleX)(charactersArray, limit);
    return shuffledArray.join("").slice(0, limit);
};
// Función para generar un identificador corto aleatorio
var ShortIdx = function (limit) {
    if (limit === void 0) { limit = 7; }
    var characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    return generateId(characterSet, limit);
};
exports.ShortIdx = ShortIdx;
// Función para generar un identificador aleatorio
var RandomIdx = function (limit) {
    if (limit === void 0) { limit = 7; }
    var characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return generateId(characterSet, limit);
};
exports.RandomIdx = RandomIdx;
