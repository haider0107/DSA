/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  //   let res = 0;

  //   for (let i = 0; i < 32; i++) {
  //     let bit = (n >> i) & 1;

  //     if (i === 0 && bit === 1) {
  //       res = ((bit << 31) | res) >>> 0;
  //       console.log(((bit << 31) | res) >>> 0);

  //       continue;
  //     }
  //     res = res | (bit << (31 - i));
  //   }

  //   return res;

  var result = 0;
  var count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};

// console.log(reverseBits(43261596)); // 964176192

// 4294967293 --> 3221225471

console.log(reverseBits(4294967293));

/*

Example
Let's say n = 13, which is 00000000 00000000 00000000 00001101 in binary.

1st Iteration:
n & 1 = 1 (LSB of n is 1)
result = 0 * 2 + 1 = 1
n >> 1 = 6 (00000000 00000000 00000000 00000110 in binary)
2nd Iteration:
n & 1 = 0 (LSB of n is 0)
result = 1 * 2 + 0 = 2 (00000000 00000000 00000000 00000010)
n >> 1 = 3 (00000000 00000000 00000000 00000011)
3rd Iteration:
n & 1 = 1 (LSB of n is 1)
result = 2 * 2 + 1 = 5 (00000000 00000000 00000000 00000101)
n >> 1 = 1 (00000000 00000000 00000000 00000001)
4th Iteration:
n & 1 = 1 (LSB of n is 1)
result = 5 * 2 + 1 = 11 (00000000 00000000 00000000 00001011)
n >> 1 = 0 (00000000 00000000 00000000 00000000)
This continues until all 32 bits have been processed. The final result contains the bits of n in reverse order.

*/
