/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let count = 0;
  const res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let resLen = res.length;

    if (res[resLen - 1][1] > intervals[i][0]) {
      count++;
      if (res[resLen - 1][1] < intervals[i][1]) continue;
      else {
        res[resLen - 1][0] = intervals[i][0];
        res[resLen - 1][1] = intervals[i][1];
      }
    } else res.push(intervals[i]);
  }

  return count;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
);
