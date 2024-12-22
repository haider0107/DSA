/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  // Your code here

  let res = "";

  for (let str of strs) {
    res += str.length + "#" + str;
  }

  return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  // Your code here

  let res = [],
    i = 0;

  while (i < s.length) {
    let j = i;

    while (s[j] !== "#") j++;

    let length = Number(s.substring(i, j));

    // console.log(s.substring(i, j + 1));

    let word = s.substring(j + 1, j + 1 + length);

    res.push(word);

    i = j + 1 + length;
  }

  return res;
};

function testEncodeDecode() {
  const examples = [
    ["hello", "world", "this", "is", "a", "test"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["apple", "banana", "orange", "grape", "pear"],
    ["123", "456", "789", "abc", "def", "ghi"],
    ["hello world", "this is a test", "foo bar baz"],
    ["a", "", "b", "", "c", "", "d"],
    ["hello", "world", "\n", "this", "is", "a", "test"],
    [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
    ],
    ["apple", "banana", "orange", "grape", "pear", "peach", "plum"],
    [
      "hello",
      "world",
      "this",
      "is",
      "a",
      "test",
      "with",
      "special",
      "characters",
      "!@#$%^&*()_+-={}:<>?",
    ],
  ];

  examples.forEach((example, index) => {
    const encoded = encode(example);
    const decoded = decode(encoded);

    // console.log(encoded);

    console.log(`Example ${index + 1}:`);
    console.log(`Input: ${JSON.stringify(example)}`);
    console.log(`Encoded: ${encoded}`);
    console.log(`Decoded: ${JSON.stringify(decoded)}`);
    console.log(`Pass: ${JSON.stringify(decoded) === JSON.stringify(example)}`);
    console.log(`---`);
  });
}

testEncodeDecode();
