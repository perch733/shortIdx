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
export declare const ShuffleX: <T>(array: T[], limit?: number) => T[];
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
export declare const ShortIdx: (limit?: number) => string;
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
export declare const RandomIdx: (limit?: number) => string;
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
export declare const RepeatIdx: (count: number, generator: (limit?: number) => string, limit?: number) => string[];
/**
 * 🔢 IndexShuffle: Devuelve un array de índices aleatorios
 */
export declare const IndexShuffle: (length: number) => number[];
/**
 * 🔀 ShuffleString: Reordena aleatoriamente los caracteres de un string
 */
export declare const ShuffleString: (str: string) => string;
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
export declare const CustomIdx: (characters: string, limit?: number) => string;
/**
 * generador de contraseñas
 */
export type PasswordOptions = {
    length?: number;
    chars?: string;
    extraChars?: string;
};
/**
 * Genera contraseñas aleatorias usando una fuente criptográficamente segura.
 * No almacena ni cifra contraseñas.
 * Por defecto incluye letras (mayúsculas y minúsculas) y números.
 */
export declare const PasswordGen: ({ length, chars, extraChars, }?: PasswordOptions) => string;
