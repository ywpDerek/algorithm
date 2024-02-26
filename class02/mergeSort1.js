// 不使用 递归 的方式 实现 归并排序

function mergeSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }

  let p = 2;
  let len = arr.length;
  let i;

  while (p <= len) {
    i = 0;

    while (i + p <= len) {
      merge(arr, i, i + ((p - 1) >> 1), i + p - 1);
      i += p;
    }

    merge(arr, i, i + ((len - i - 1) >> 1), len - 1)
    p *= 2
  }

  // p 16 
  // arr 的长度不一定是 2 的倍数 所以需要按照分割 merge 一遍
  merge(arr, 0, p / 2 - 1, len - 1)

  return arr;
}

function merge (arr, L, M, R) {
  const help = [];
  let p1 = L;
  let p2 = M + 1;
  let i = 0;

  while (p1 <= M && p2 <= R) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }

  while (p1 <= M) {
    help[i++] = arr[p1++];
  }

  while (p2 <= R) {
    help[i++] = arr[p2++];
  }

  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }
}

const arr = [3, 6, 2, 0, 7, 9, 4, 0, 5, 2, 3];
console.log(mergeSort(arr));