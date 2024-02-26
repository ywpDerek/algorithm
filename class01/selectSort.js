// 选择排序

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }

    swap(arr, i, minIndex)
  }

  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  return arr
}

let arr = [1, 3, 2, 5, 7, 6, 4];

console.log(selectSort(arr));