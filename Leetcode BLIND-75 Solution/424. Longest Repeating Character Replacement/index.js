/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let res = 0,
    l = 0;

  let counts = {};

  for (let r = 0; r < s.length; r++) {
    counts[s[r]] = counts[s[r]] ? counts[s[r]] + 1 : 1;

    const values = Object.values(counts);

    if (r - l + 1 - Math.max(...values) > k) {
      counts[s[l]] = counts[s[l]] - 1;
      l++;
    }

    console.log(counts);

    res = Math.max(res, r - l + 1);
  }

  return res;
};

console.log(characterReplacement("AABABBA", 2));
