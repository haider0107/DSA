/**
 * @param {string[]} words
 * @returns {string}
 */

const foreignDictionary = (words) => {
  const adj = {};

  for (let w of words) {
    for (let l of w) {
      adj[l] = new Set();
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i],
      w2 = words[i + 1];

    if (w1.length > w2.length && w1[0] === w2[0]) return "";

    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      if (w1[j] !== w2[j]) {
        adj[w1[j]].add(w2[j]);
        break;
      }
    }
  }

  const visit = {};
  const res = [];

  const dfs = (c) => {
    if (visit[c] === false || visit[c] === true) return visit[c];

    visit[c] = true;

    for (let neighChar of adj[c]) {
      if (dfs(neighChar)) {
        return true;
      }
    }

    visit[c] = false;

    res.push(c);
    return false;
  };

  for (let c in adj) {
    if (dfs(c)) {
      return "";
    }
  }

  res.reverse();

  return res.join("");
};

console.log(foreignDictionary(["hrn", "hrf", "er", "enn", "rfnn"]));
