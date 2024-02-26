// 插入排序

function insertSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }

  for (let i = 1; i < arr.length; i++) {

    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1)
    }
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr
}

let arr = [1, 3, 2, 5, 7, 6, 4];

console.log(insertSort(arr));

