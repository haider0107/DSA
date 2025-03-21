// Leetcode - 3

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
  let l = 0,
    r = 0;

  let result = 0;
  let hasSet = new Set();

  while (r < s.length) {
    while (hasSet.has(s[r])) {
      hasSet.delete(s[l]);
      l++;
    }
    hasSet.add(s[r]);

    result = Math.max(result, hasSet.size);
    r++;
  }

  return result;
};
