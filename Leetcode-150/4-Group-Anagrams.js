const groupAnagrams = (strs) => {
  const group = {};

  for (let str of strs) {
    const values = Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      values[str.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    }

    const loc = values.join(",");

    if (group[loc]) group[loc].push(str);
    else {
      group[loc] = [];
      group[loc].push(str);
    }
  }

  return Object.values(group)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
