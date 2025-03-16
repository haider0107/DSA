const validPalindrome = (s) => {
  const isAlphaNumeric = (char) => {
    if (
      (char.charCodeAt(0) >= "a".charCodeAt(0) &&
        char.charCodeAt(0) <= "z".charCodeAt(0)) ||
      (char.charCodeAt(0) >= "A".charCodeAt(0) &&
        char.charCodeAt(0) <= "Z".charCodeAt(0)) ||
      (char.charCodeAt(0) >= "0".charCodeAt(0) &&
        char.charCodeAt(0) <= "9".charCodeAt(0))
    ) {
      return true;
    } else {
      return false;
    }
  };

  let l = 0,
    r = s.length - 1;

  while (l < r) {
    while (!isAlphaNumeric(s[l]) && l < r) l++;
    while (!isAlphaNumeric(s[r]) && l < r) r--;
    // "a".
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

console.log(validPalindrome("A man, a plan, a canal, Panama!"));
