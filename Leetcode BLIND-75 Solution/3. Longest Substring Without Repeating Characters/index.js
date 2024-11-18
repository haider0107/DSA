/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0,
    l = 0;

  const subSet = new Set();

  for (let i = 0; i < s.length; i++) {
    while (subSet.has(s[i])) {
      subSet.delete(s[l]);
      l++;
    }

    subSet.add(s[i]);

    res = Math.max(res, subSet.size);
  }

  return res;
};

console.log(lengthOfLongestSubstring("pwwkew"));
