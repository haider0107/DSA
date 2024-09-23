/**
 * @param {number} crs
 * @param {Map} preMap
 * @param {Set} visiting
 * @return {boolean}
 */
const dfs = (crs, premap, visited) => {
  /*
    
        1. Check if visited or not and if visited return false
        2. Check if preMap.get(crs).length === 0, then return true
        3. Put crs in visited set
        4. Again do dfs for adjecent list of course
        5. if dfs return false return false
        6. delete course from visited set
        7. set preMap.set(crs,[])
        8. return true 
    
    */
  if (visited.has(crs)) return false;

  if (premap.get(crs).lenght === 0) return true;

  visited.add(crs);
  for (const pair of premap.get(crs))
    if (!dfs(pair, premap, visited)) return false;

  visited.delete(crs);
  premap.set(crs, []);

  return true;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  /*
    
        1. Create map of length of numCourses with empty array
        2. Set adjecent list for each course with the map created above
        3. Created visited array of type set
        4. Now run dfs for each course and if return false then return false
        5. return true
    */

  const preMap = new Map();

  //   1
  for (let i = 0; i < numCourses; i++) preMap.set(i, []);

  //   2
  for (const pair of prerequisites) preMap.get(pair[0]).push(pair[1]);

  // 3
  const visited = new Set();

  //   4
  for (let i = 0; i < numCourses; i++)
    if (!dfs(i, preMap, visited)) return false;

  //   5
  return true;
};

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
