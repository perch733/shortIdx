export const ShuffleX = (array, limit) => {
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
const validateLimit = (limit, maxLimit) => {
    if (limit < 1 || limit > maxLimit) {
        throw new Error(`El límite debe estar entre 1 y ${maxLimit}`);
    }
    return limit;
};
const generateId = (characters, limit = 7) => {
    const maxLimit = characters.length;
    validateLimit(limit, maxLimit);
    const charactersArray = characters.split("");
    const shuffledArray = ShuffleX(charactersArray, limit);
    return shuffledArray.join("").slice(0, limit);
};
export const ShortIdx = (limit = 7) => {
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    return generateId(characterSet, limit);
};
export const RandomIdx = (limit = 7) => {
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,./:;<=>?@[]^`{|}~\"";
    return generateId(characterSet, limit);
};
export const RepeatIdx = (count, generator, limit) => {
    if (count < 1)
        throw new Error("El número de elementos debe ser mayor a 0");
    return Array.from({ length: count }, () => generator(limit));
};
export const IndexShuffle = (length) => {
    if (length < 1)
        throw new Error("La longitud debe ser mayor a 0");
    const indices = Array.from({ length }, (_, i) => i);
    return ShuffleX(indices);
};
export const ShuffleString = (str) => {
    return ShuffleX(str.split("")).join("");
};
export const CustomIdx = (characters, limit = 7) => {
    return generateId(characters, limit);
};
