function findMaxLengthOfThreeWords(word1, word2, word3) {
  let max = 0;
  let words = [word1, word2, word3];
  for (let word in words) {
    if (words[word].length > max) {
      max = words[word].length;
    }
  }
  return max;
}

findMaxLengthOfThreeWords('Test', 'Uint8ClampedArray', 'fun');

// var arr = [ 'fdgdfgdfg', 'gdfgf', 'gdfgdfhawsdgd', 'gdf', 'gdfhdfhjurvweadsd' ];
// arr.sort(function (a, b) { return b.length - a.length })[0];

// Math.max(...(x.map(el => el.length)));