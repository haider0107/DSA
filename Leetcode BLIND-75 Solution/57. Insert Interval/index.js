/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);

      return res.concat(intervals.slice(i));
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  res.push(newInterval);
  return res;
};

// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [9, 10],
//     ],
//     [6, 7]
//   )
// );

console.log(
  insert(
    [
      [1, 3],
      [4, 6],
    ],
    [2, 5]
  )
);
