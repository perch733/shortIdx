/**
 * Baraja los elementos de un array de forma aleatoria.
 * No muta el array original.
 */
export const ShuffleX = (array, limit) => {
    if (!Array.isArray(array))
        throw new TypeError("El parámetro debe ser un array");
    const len = array.length;
    const actualLimit = limit !== undefined ? limit : len;
    // Optimización: si el array está vacío o limit es 0, devolver vacío
    if (len === 0 || actualLimit === 0)
        return [];
    validateLimit(actualLimit, len);
    const shuffled = [...array];
    // Algoritmo Fisher-Yates optimizado para resultados parciales
    // Si necesitamos 'actualLimit' elementos, solo barajamos los primeros 'actualLimit'
    for (let i = 0; i < actualLimit; i++) {
        // Selección aleatoria desde el rango restante [i, len - 1]
        const j = i + Math.floor(Math.random() * (len - i));
        // Intercambio
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, actualLimit);
};
// Función para validar el límite
const validateLimit = (limit, maxLimit) => {
    if (limit < 1 || limit > maxLimit) {
        throw new Error(`El límite debe estar entre 1 y ${maxLimit}`);
    }
    return limit;
};
// Función interna para generar un identificador
const generateId = (characters, limit = 7) => {
    if (limit < 1) {
        throw new Error("El límite debe ser mayor a 0");
    }
    if (characters.length < 2) {
        throw new Error("El charset debe tener al menos 2 caracteres");
    }
    const array = new Uint32Array(limit);
    crypto.getRandomValues(array);
    let result = "";
    const len = characters.length;
    for (let i = 0; i < limit; i++) {
        result += characters[array[i] % len];
    }
    return result;
};
/**
 * Función para generar un identificador aleatorio con caracteres alfanuméricos.
 */
export const ShortIdx = (limit = 7) => {
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    return generateId(characterSet, limit);
};
/**
 * Función para generar un identificador aleatorio que incluyen símbolos y caracteres especiales.
 */
export const RandomIdx = (limit = 7) => {
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,./:;<=>?@[]^`{|}~\"";
    return generateId(characterSet, limit);
};
/**
 * 🔁 RepeatIdx: Genera múltiples IDs usando una función generadora
 */
export const RepeatIdx = (count, generator, limit) => {
    if (!Number.isInteger(count) || count < 1) {
        throw new Error("El número de elementos debe ser un entero mayor a 0");
    }
    return Array.from({ length: count }, () => generator(limit));
};
/**
 * 🔢 IndexShuffle: Devuelve un array de índices aleatorios
 */
export const IndexShuffle = (length) => {
    if (length < 1)
        throw new Error("La longitud debe ser mayor a 0");
    const indices = Array.from({ length }, (_, i) => i);
    return ShuffleX(indices);
};
/**
 * 🔀 ShuffleString: Reordena aleatoriamente los caracteres de un string
 */
export const ShuffleString = (str) => {
    return ShuffleX(str.split("")).join("");
};
/**
 * 🆔 CustomIdx: Generador con set de caracteres personalizado
 */
export const CustomIdx = (characters, limit = 7) => {
    return generateId(characters, limit);
};
const DEFAULT_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
/**
 * Genera contraseñas aleatorias usando una fuente criptográficamente segura.
 * No almacena ni cifra contraseñas.
 */
export const PasswordGen = ({ length = 16, chars = DEFAULT_CHARS, extraChars = "", } = {}) => {
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
    // generateId ya valida que el charset tenga >= 2 caracteres y limit >= 1
    return generateId(finalChars, length);
};
