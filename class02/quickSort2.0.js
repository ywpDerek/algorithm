// 快排 2.0
// 2.0 的优化其实就是 在 partition 的过程使用了 荷兰国旗2 里面的代码
// 主要省去了相等情况的排列

function quickSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L >= R) {
    return;
  }

  let p = partition(arr, L, R);
  process(arr, L, p[0] - 1);
  process(arr, p[1] + 1, R);
}

function partition(arr, L, R) {
  let less = L - 1;
  let more = R;

  while(L < more) {
    if (arr[L] < arr[R]) {
      swap(arr, ++less, L++);
    } else if (arr[L] > arr[R]) {
      swap(arr, --more, L);
    } else {
      L++;
    }
  }

  swap(arr, more, R);
  return [less + 1, more];
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [4, 6, 3, 0, 2, 1, 8, 9, 4];
quickSort(arr);
console.log(arr);