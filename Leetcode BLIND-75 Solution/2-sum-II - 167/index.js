/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let r = 0,
    l = numbers.length - 1,
    i = 0;
  let j = l;

  while (j >= 0 && i < numbers.length) {
    let value = numbers[i] + numbers[j];

    if (value === target) {
      return [i + 1, j + 1];
    } else if (value > target) {
      j--;
    } else {
      i++;
    }
  }
};
