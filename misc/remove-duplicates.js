function removeDuplicates (array) {
  let newArray = [];
  let answer = array.map(function (value, index, array) {
    if (!newArray.includes(value)){
      newArray.push(value);
    }
  });
  return newArray;
}

var arr = [1, 2, 5, 4, 5, 6, 7];
var result = removeDuplicates(arr);
console.log(result);