// Función para barajar un array
export const ShuffleX = (array: any[], limit?: number): any[] => {
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

// Función para validar el límite
const validateLimit = (limit: number, maxLimit: number): number => {
  if (limit < 1 || limit > maxLimit) {
    throw new Error(`El límite debe estar entre 1 y ${maxLimit}`);
  }
  return limit;
};

// Función interna para generar un identificador
const generateId = (characters: string, limit: number = 7): string => {
  const maxLimit = characters.length;

  validateLimit(limit, maxLimit);

  const charactersArray = characters.split("");
  const shuffledArray = ShuffleX(charactersArray, limit);
  return shuffledArray.join("").slice(0, limit);
};

// Función para generar un identificador corto aleatorio
export const ShortIdx = (limit: number = 7): string => {
  const characterSet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  return generateId(characterSet, limit);
};

// Función para generar un identificador aleatorio
export const RandomIdx = (limit: number = 7): string => {
  const characterSet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,./:;<=>?@[]^`{|}~\"";
  return generateId(characterSet, limit);
};

// 🔁 RepeatIdx: Genera múltiples IDs usando una función generadora
export const RepeatIdx = (
  count: number,
  generator: (limit?: number) => string,
  limit?: number
): string[] => {
  if (count < 1) throw new Error("El número de elementos debe ser mayor a 0");
  return Array.from({ length: count }, () => generator(limit));
};

// 🔢 IndexShuffle: Devuelve un array de índices aleatorios
export const IndexShuffle = (length: number): number[] => {
  if (length < 1) throw new Error("La longitud debe ser mayor a 0");
  const indices = Array.from({ length }, (_, i) => i);
  return ShuffleX(indices);
};

// 🔀 ShuffleString: Reordena aleatoriamente los caracteres de un string
export const ShuffleString = (str: string): string => {
  return ShuffleX(str.split("")).join("");
};

// 🆔 CustomIdx: Generador con set de caracteres personalizado
export const CustomIdx = (characters: string, limit: number = 7): string => {
  return generateId(characters, limit);
};
