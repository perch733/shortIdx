// Función para barajar un array
export const ShuffleX = (array, limit) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  validateLimit(array, limit);
  return shuffled.slice(0, limit);
};

// Función para validar el límite
const validateLimit = (limit, maxLimit) => {
  if (limit < 1 || limit > maxLimit) {
    throw new Error(`El límite debe estar entre 1 y ${maxLimit}`);
  }
};

// Función interna para generar un identificador
const generateId = (characters, limit = 7) => {
  const maxLimit = characters.length;

  validateLimit(limit, maxLimit);

  const charactersArray = characters.split("");
  const shuffledArray = ShuffleX(charactersArray);
  return shuffledArray.slice(0, limit).join("");
};

// Función para generar un identificador corto aleatorio
function ShortIdx(limit = 7) {
  const characterSet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  return generateId(characterSet, limit);
}

// Función para generar un identificador aleatorio
function RandomIdx(limit = 7) {
  const characterSet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return generateId(characterSet, limit);
}
