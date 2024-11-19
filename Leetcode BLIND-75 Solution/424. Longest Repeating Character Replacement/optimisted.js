/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let res = 0,
    l = 0;

  let counts = {};
  let maxFeq = 0;

  for (let r = 0; r < s.length; r++) {
    counts[s[r]] = counts[s[r]] ? counts[s[r]] + 1 : 1;

    // const values = Object.values(counts);
    maxFeq = Math.max(maxFeq, counts[s[r]]);

    if (r - l + 1 - maxFeq > k) {
      counts[s[l]] = counts[s[l]] - 1;
      l++;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
};
