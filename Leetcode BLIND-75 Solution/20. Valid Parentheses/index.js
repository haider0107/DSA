/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let c of s) {
    if (c === "(" || c === "[" || c === "{") stack.push(c);
    else {
      if (stack.length === 0) return false;
      if (c === ")" && stack[stack.length - 1] !== "(") return false;
      if (c === "]" && stack[stack.length - 1] !== "[") return false;
      if (c === "}" && stack[stack.length - 1] !== "{") return false;
      stack.pop();
    }
  }

  if (stack.length === 0) return true;
  else {
    return false;
  }
};

console.log(isValid("()]"));
