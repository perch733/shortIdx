/**
 * Baraja los elementos de un array de forma aleatoria.
 * No muta el array original.
 */
export declare const ShuffleX: <T>(array: T[], limit?: number) => T[];
/**
 * Función para generar un identificador aleatorio con caracteres alfanuméricos.
 */
export declare const ShortIdx: (limit?: number) => string;
/**
 * Función para generar un identificador aleatorio que incluyen símbolos y caracteres especiales.
 */
export declare const RandomIdx: (limit?: number) => string;
/**
 * 🔁 RepeatIdx: Genera múltiples IDs usando una función generadora
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
 * 🆔 CustomIdx: Generador con set de caracteres personalizado
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
 */
export declare const PasswordGen: ({ length, chars, extraChars, }?: PasswordOptions) => string;
