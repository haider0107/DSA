const numsSameConsecDiff = (n, k) => {
  const res = [];

  for (let i = 1; i <= 9; i++) {
    res.push(i);
  }

  let len = n - 1;

  while (len !== 0) {
    let size = res.length;

    for (let j = 0; j < size; j++) {
      let curr = res.shift();
      let lastdigit = curr % 10;
      if (lastdigit + k <= 9) res.push(curr * 10 + lastdigit + k);
      if (k !== 0 && lastdigit - k >= 0) res.push(curr * 10 + lastdigit - k);
    }

    len--;
  }

  return res;
};

console.log(numsSameConsecDiff(3, 7));
