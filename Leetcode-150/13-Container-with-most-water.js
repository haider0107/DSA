/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  let left = 0,
    right = height.length - 1;

  while (left < right) {
    let minheight = Math.min(height[left], height[right]);
    let area = (right - left) * minheight; // Area of rectangle

    maxArea = Math.max(maxArea, area);
    if (left < right) left++;
    else {
      right--;
    }
  }

  console.log(maxArea);
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

maxArea([1, 1]);
