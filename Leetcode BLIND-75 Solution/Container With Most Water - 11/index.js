/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  let l = 0,
    r = height.length - 1;

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);

    if (maxArea < area) {
      maxArea = area;
    }

    if (height[l] > height[r]) {
      r -= 1;
    } else if (height[l] < height[r]) {
      l += 1;
    } else {
      l += 1;
    }
  }

  return maxArea;
};

console.log(maxArea([1,1]));
