const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let small = i;
    for (let j = i; j < len; j++) {
      if (arr[small] > arr[j + 1]) {
        small = j + 1;
      }
    }
    swap(arr, small, i);
  }

  return arr;
}

console.log(selectionSort(numbers));
