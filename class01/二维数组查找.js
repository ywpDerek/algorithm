// 二维数组的查找


const func = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;

  while (l < arr[0].length && r >= 0) {
    if (arr[r][l] < target) {
      l++;
    } else if (arr[r][l] > target) {
      r--
    } else {
      return true
    }
  }

  return false
}

const arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
];

console.log(func(arr, 11))