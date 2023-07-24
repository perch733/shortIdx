function shortIdx(limit: number = 9): string {
  const character: string =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  const myArray: string[] = Array.from(character);
  let ctr: number = myArray.length;
  let temp: string, index: number;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = myArray[ctr];
    myArray[ctr] = myArray[index];
    myArray[index] = temp;
  }
  return myArray.join("").slice(0, limit).toString();
}

export default {
  shortIdx,
};
