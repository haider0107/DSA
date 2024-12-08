/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const countT = {},
    window = {};
  let need = 0,
    have = 0;
  let res = [-1, -1];
  let resLen = Infinity;
  let l = 0; // left pointer

  // set countT
  for (let c of t) {
    countT[c] = (countT[c] || 0) + 1;
  }

  if (s === "") return "";

  need = Object.keys(countT).length;

  for (let r = 0; r < s.length; r++) {
    let c = s[r];

    window[c] = (window[c] || 0) + 1;

    if (countT[c] && window[c] === countT[c]) have++;

    while (have === need) {
      if (r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }
      let ch = s[l];
      window[ch]--;

      if (countT[ch] && window[ch] < countT[ch]) have--;

      l++;
    }
  }

  return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
};

console.log(minWindow("a", "aa"));
