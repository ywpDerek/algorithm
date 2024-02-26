// 快排 3.0 随机快排
// 其实就是在 2.0 的基础上加了两行代码
// 我们将 选择的值 变成 随机 并不是指定成 最后一个
// 随机选择一个索引，并且和最后一个值进行交换

// 生成 随机索引 并且和最后一个值 进行交换
// swap(arr, L + Math.floor(Math.random() * (R - L + 1)), R)

// 时间复杂度 O(N * logN)
// 额外空间复杂度 O(logN)


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

  // 生成 随机索引 并且和最后一个值 进行交换
  swap(arr, L + Math.floor(Math.random() * (R - L + 1)), R)

  let p = partition(arr, L, R);
  process(arr, L, p[0] - 1);
  process(arr, p[1] + 1, R);
}

function partition(arr, L, R) {
  let less = L - 1;
  let more = R;

  while (L < more) {
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
