// 荷兰国旗问题1
// 给定一个数组 arr，和一个数 num，请把小于等于 num 的数
// 放在数组的左边，大于 num 的数放在数组的右边。
// 要求额外空间复杂度 O(1)，时间复杂度 O(N)

function main(arr, num) {
  let i = -1;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] <= num) {
      swap(arr, ++i, j++)
    } else {
      j++
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [6, 3, 2, 9, 5, 4, 1, 0];
main(arr, 5);
console.log(arr);