// Leetcode 567. Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const haveMap = {};
  let have = 0;

  for (let char of s1) {
    haveMap[char] = haveMap[char] ? haveMap[char] + 1 : 1;
  }

  for (let ele in haveMap) {
    have++;
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    const neededMap = {};
    let need = 0;
    for (let j = i; j < i + s1.length; j++) {
      neededMap[s2[j]] = neededMap[s2[j]] ? neededMap[s2[j]] + 1 : 1;
      if (neededMap[s2[j]] === haveMap[s2[j]]) need++;

      if (have === need) return true;
    }
  }

  return false;
};

// console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("adc", "dcda"));

