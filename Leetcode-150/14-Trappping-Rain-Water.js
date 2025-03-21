/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let result = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);

      if (leftMax - height[left] > 0) result += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);

      if (rightMax - height[right] > 0) result += rightMax - height[right];
      right--;
    }
  }

  console.log(result);
};

trap([4,2,0,3,2,5]);
