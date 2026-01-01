"use strict";
/**
 * Baraja los elementos de un array de forma aleatoria.
 * No muta el array original.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordGen = exports.CustomIdx = exports.ShuffleString = exports.IndexShuffle = exports.RepeatIdx = exports.RandomIdx = exports.ShortIdx = exports.ShuffleX = void 0;
const ShuffleX = (array, limit) => {
    if (!Array.isArray(array))
        throw new TypeError("El parámetro debe ser un array");
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const actualLimit = limit !== undefined ? limit : array.length;
    validateLimit(actualLimit, array.length);
    return shuffled.slice(0, actualLimit);
};
exports.ShuffleX = ShuffleX;
// Función para validar el límite
const validateLimit = (limit, maxLimit) => {
    if (limit < 1 || limit > maxLimit) {
        throw new Error(`El límite debe estar entre 1 y ${maxLimit}`);
    }
    return limit;
};
// Función interna para generar un identificador
const generateId = (characters, limit = 7) => {
    const maxLimit = characters.length;
    validateLimit(limit, maxLimit);
    const charactersArray = characters.split("");
    const shuffledArray = (0, exports.ShuffleX)(charactersArray, limit);
    return shuffledArray.join("").slice(0, limit);
};
/**
 * Función para generar un identificador aleatorio con caracteres alfanuméricos.
 */
const ShortIdx = (limit = 7) => {
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    return generateId(characterSet, limit);
};
exports.ShortIdx = ShortIdx;
/**
 * Función para generar un identificador aleatorio que incluyen símbolos y caracteres especiales.
 */
const RandomIdx = (limit = 7) => {
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,./:;<=>?@[]^`{|}~\"";
    return generateId(characterSet, limit);
};
exports.RandomIdx = RandomIdx;
/**
 * 🔁 RepeatIdx: Genera múltiples IDs usando una función generadora
 */
const RepeatIdx = (count, generator, limit) => {
    if (!Number.isInteger(count) || count < 1) {
        throw new Error("El número de elementos debe ser un entero mayor a 0");
    }
    return Array.from({ length: count }, () => generator(limit));
};
exports.RepeatIdx = RepeatIdx;
/**
 * 🔢 IndexShuffle: Devuelve un array de índices aleatorios
 */
const IndexShuffle = (length) => {
    if (length < 1)
        throw new Error("La longitud debe ser mayor a 0");
    const indices = Array.from({ length }, (_, i) => i);
    return (0, exports.ShuffleX)(indices);
};
exports.IndexShuffle = IndexShuffle;
/**
 * 🔀 ShuffleString: Reordena aleatoriamente los caracteres de un string
 */
const ShuffleString = (str) => {
    return (0, exports.ShuffleX)(str.split("")).join("");
};
exports.ShuffleString = ShuffleString;
/**
 * 🆔 CustomIdx: Generador con set de caracteres personalizado
 */
const CustomIdx = (characters, limit = 7) => {
    return generateId(characters, limit);
};
exports.CustomIdx = CustomIdx;
const DEFAULT_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?";
/**
 * Genera contraseñas aleatorias usando una fuente criptográficamente segura.
 * No almacena ni cifra contraseñas.
 */
const PasswordGen = ({ length = 16, chars = DEFAULT_CHARS, extraChars = "", } = {}) => {
    if (!Number.isInteger(length) || length < 1) {
        throw new Error("La longitud debe ser un número entero mayor a 0");
    }
    if (typeof extraChars !== "string") {
        throw new Error("extraChars debe ser un string");
    }
    if (typeof chars !== "string" || chars.length < 2) {
        throw new Error("El charset debe tener al menos 2 caracteres");
    }
    const finalChars = Array.from(new Set(chars + extraChars)).join("");
    if (finalChars.length < 2) {
        throw new Error("El charset final debe tener al menos 2 caracteres");
    }
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, (x) => finalChars[x % finalChars.length]).join("");
};
exports.PasswordGen = PasswordGen;
