/**
 * Baraja los elementos de un array de forma aleatoria usando el algoritmo Fisher-Yates.
 * No muta el array original, devuelve una nueva copia.
 *
 * @template T - El tipo de elementos en el array.
 * @param {T[]} array - El array original a barajar.
 * @param {number} [limit] - Opcional. Número máximo de elementos a devolver.
 * @returns {T[]} Un nuevo array con los elementos barajados.
 *
 * @example
 * const nums = [1, 2, 3, 4, 5];
 * const shuffled = ShuffleX(nums); // [3, 1, 5, 2, 4] (aleatorio)
 * const picked = ShuffleX(nums, 2); // [5, 1] (solo 2 elementos)
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
    const len = characters.length;
    // Calculamos el límite para evitar el sesgo de módulo (modulo bias)
    // Rechazamos valores que caigan en el rango sobrante del espacio de 32 bits
    const maxUint32 = 0xffffffff;
    const rangeLimit = maxUint32 - (maxUint32 % len);
    let result = "";
    while (result.length < limit) {
        // Pedimos la cantidad necesaria de valores aleatorios
        // En la mayoría de los casos, la tasa de rechazo es infinitesimal
        const bufferSize = limit - result.length;
        const array = new Uint32Array(bufferSize);
        crypto.getRandomValues(array);
        for (let i = 0; i < bufferSize; i++) {
            if (result.length === limit)
                break;
            const val = array[i];
            // Si el valor está dentro del rango seguro, lo usamos
            if (val < rangeLimit) {
                result += characters[val % len];
            }
            // Si no, lo descartamos (rejection sampling) y el bucle while se encargará de rellenar
        }
    }
    return result;
};
/**
 * Función para generar un identificador aleatorio con caracteres alfanuméricos.
 * Ideal para IDs de base de datos, URLs cortas, etc.
 *
 * Caracteres: a-z, A-Z, 0-9, -, _
 *
 * @param {number} [limit=7] - La longitud del ID generado.
 * @returns {string} El ID aleatorio generado.
 *
 * @example
 * ShortIdx(); // "xK9_m2P"
 * ShortIdx(10); // "9_m2PxK9aB"
 */
export const ShortIdx = (limit = 7) => {
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    return generateId(characterSet, limit);
};
/**
 * Función para generar un identificador aleatorio que incluyen símbolos y caracteres especiales.
 * Mayor entropía que ShortIdx debido a un charset más grande.
 *
 * @param {number} [limit=7] - La longitud del ID generado.
 * @returns {string} El ID aleatorio generado.
 *
 * @example
 * RandomIdx(); // "xK9!m2P"
 * RandomIdx(12); // "9_m2PxK9!@#$"
 */
export const RandomIdx = (limit = 7) => {
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,./:;<=>?@[]^`{|}~\"";
    return generateId(characterSet, limit);
};
/**
 * 🔁 RepeatIdx: Genera múltiples IDs usando una función generadora.
 * Útil para crear datos de prueba (mock data) o generar lotes de claves.
 *
 * @param {number} count - Cantidad de IDs a generar.
 * @param {Function} generator - La función generadora a usar (ej. ShortIdx, RandomIdx).
 * @param {number} [limit] - Opcional. Longitud de cada ID individual.
 * @returns {string[]} Array con los IDs generados.
 *
 * @example
 * RepeatIdx(3, ShortIdx); // ["aB1", "cD2", "eF3"]
 * RepeatIdx(2, RandomIdx, 10); // ["aB1!cD2@eF", "3#gH4$iJ5%"]
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
 * 🆔 CustomIdx: Generador con set de caracteres personalizado.
 * Permite definir exactamente qué caracteres pueden aparecer en el ID.
 *
 * @param {string} characters - String con todos los caracteres permitidos.
 * @param {number} [limit=7] - Longitud del ID.
 * @returns {string} ID generado usando solo los caracteres provistos.
 *
 * @example
 * CustomIdx("01", 8); // "10110010" (Binario aleatorio)
 * CustomIdx("ABC", 4); // "BACA"
 */
export const CustomIdx = (characters, limit = 7) => {
    return generateId(characters, limit);
};
const DEFAULT_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
/**
 * Genera contraseñas aleatorias usando una fuente criptográficamente segura.
 * No almacena ni cifra contraseñas.
 * Por defecto incluye letras (mayúsculas y minúsculas) y números.
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
