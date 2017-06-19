function getIndexOf(char, str) {
  let found = -1;
  str.split('').findIndex((value, index, array) => {
    if (value === char) {
      found = index;
      return found;
    }
  });
  return found;
}
