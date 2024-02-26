// 基于归并衍生的 小和问题

// 在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和
// 求一个数组的小和

// 例子：[1, 3, 4, 2, 5]
// 1 左边比 1 小的数  -> 没有
// 3 左边比 3 小的数  -> 1
// 4 左边比 4 小的数  -> 1, 3
// 2 左边比 2 小的数  -> 1
// 5 左边比 5 小的数  -> 1, 3, 4, 2
// 所以这个数组的小和为 1 + 1 + 3 + 1 + 1 + 3 + 4 + 2 = 16

function smallNum(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L === R) {
    return 0;
  }

  let mid = L + ((R - L) >> 1);
  return process(arr, L, mid) + process(arr, mid + 1, R) + merge(arr, L, mid, R);
}

function merge(arr, L, M, R) {
  const help = [];
  let i = 0;
  let p1 = L;
  let p2 = M + 1;
  let res = 0;

  while (p1 <= M && p2 <= R) {
    res += arr[p1] < arr[p2] ? (R - p2 + 1) * arr[p1] : 0;
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }

  while (p1 <= M) {
    help[i++] = arr[p1++]
  }

  while (p2 <= R) {
    help[i++] = arr[p2++]
  }

  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i]
  }

  return res
}

const arr = [1, 3, 4, 2, 5];
console.log(smallNum(arr));
console.log(arr)