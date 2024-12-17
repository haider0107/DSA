/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let reslen = 0;
  let resIdx = 0;
  for (let i = 0; i < s.length; i++) {
    // For odd
    let l = i,
      r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > reslen) {
        reslen = r - l + 1;
        resIdx = l;
      }

      l -= 1;
      r += 1;
    }

    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > reslen) {
        reslen = r - l + 1;
        resIdx = l;
      }

      l -= 1;
      r += 1;
    }
  }

  return s.substring(resIdx, resIdx + reslen);
};

console.log(longestPalindrome("aacabdkacaa"));
