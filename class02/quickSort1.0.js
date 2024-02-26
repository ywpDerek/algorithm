// 快排 1.0

function quickSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L >= R) {
    return;
  }

  let index = partition(arr, L, R);
  process(arr, L, index - 1);
  process(arr, index + 1, R);
}

function partition(arr, L, R) {
  let less = L - 1;
  let i = L

  while (i < R) {
    if (arr[i] <= arr[R]) {
      swap(arr, ++less, i++)
    } else {
      i++;
    }
  }

  swap(arr, less + 1, R)
  return less + 1
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


const arr = [4, 6, 3, 0, 2, 1, 8, 9, 4];
quickSort(arr);
console.log(arr);