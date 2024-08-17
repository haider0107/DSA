/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = (prices) => {
  let l = 0,
    r = 1;

  let maxP = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];

      if (profit > maxP) {
        maxP = profit;
      }
    } else {
      l = r;
    }
    r += 1;
  }

  return maxP;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
