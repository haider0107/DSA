/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const group = {};

  for (let i = 0; i < strs.length; i++) {
    let value = Array(26).fill(0);

    let word = strs[i];
    for (let j = 0; j < word.length; j++) {
      value[word.charCodeAt(j) - 97] += 1;
    }
    let loc = value.join(",");

    if (group[loc]) {
      group[loc].push(word);
    } else {
      group[loc] = [];
      group[loc].push(word);
    }
  }

  return Object.values(group);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
