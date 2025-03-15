const encode = (strs) => {
  let result = "";

  for (let str of strs) {
    let lenght = str.length;

    let code = lenght + "#" + str;

    result += code;
  }

  return result;
};

const decode = (str) => {
  let i = 0;
  const word = [];

  while (i < str.length) {
    let j = i;

    while (str[j] !== "#") j++;

    let length = Number(str.substring(i, j));

    let w = str.substring(j + 1, j + 1 + length);

    word.push(w);

    i = j + length + 1;
  }

  return word;
};

console.log(encode(["neet", "code", "love", "you"]));
let code = encode(["neet", "code", "love", "you"]);

console.log(decode(code));
