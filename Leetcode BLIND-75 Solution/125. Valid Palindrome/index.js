/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAlphaNum = (c) => {
    if (
      (c.charCodeAt(0) >= "a".charCodeAt(0) &&
        c.charCodeAt(0) <= "z".charCodeAt(0)) ||
      (c.charCodeAt(0) >= "A".charCodeAt(0) &&
        c.charCodeAt(0) <= "Z".charCodeAt(0)) ||
      (c.charCodeAt(0) >= "0".charCodeAt(0) &&
        c.charCodeAt(0) <= "9".charCodeAt(0))
    ) {
      return true;
    } else {
      return false;
    }
  };

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (!isAlphaNum(s[left]) && left < right) left++;
    while (!isAlphaNum(s[right]) && left < right) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++, right--;
  }

  return true;
};

console.log(isPalindrome("race a car"));
