// 基于归并衍生的 逆序对问题

// 在一个数组中，左边的数如果比右边的数大，则这两个数构成一个逆序对
// 请返回逆序对的数量

function getNum(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L === R) {
    return 0
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
    res += arr[p1] > arr[p2] ? (R - p2 + 1) : 0;
    help[i++] = arr[p1] > arr[p2] ? arr[p1++] : arr[p2++]
  }

  while (p1 <= L) {
    help[i++] = arr[p1++];
  }

  while (p2 <= R) {
    help[i++] = arr[p2++];
  }

  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i] 
  }

  return res
}

const arr = [1, 5, 3, 7, 3, 0]

console.log(getNum(arr))
console.log(arr);
