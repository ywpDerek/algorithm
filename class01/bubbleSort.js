// 冒泡排序

function bubbleSort(arr) {
  for (let e = arr.length - 1; e > 0; e--) {
    // 0-e
    for (let i = 0; i < e; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

let arr = [1, 3, 2, 5, 6, 4]

console.log(bubbleSort(arr));