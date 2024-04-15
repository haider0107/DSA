// Given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// Given an array = [2,3,4,5]
// return undefined

let arr = [2, 1, 1, 2, 3, 5, 1, 2, 4];

let temp = [],
  j = 0;
let i;
for (i = 0; i < arr.length; i++) {
  if (temp.includes(arr[i])) {
    console.log(arr[i]);
    return;
  } else {
    temp[j] = arr[i];
    j++;
  }
  console.log(temp);
}

if (i == arr.length) {
  console.log(undefined);
}
