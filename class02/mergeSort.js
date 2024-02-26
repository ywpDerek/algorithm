// 归并排序

function mergeSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  process(arr, 0, arr.length - 1);
  return arr;
}

function process(arr, L, R) {
  if (L === R) {
    return;
  }

  let mid = L + ((R - L) >> 1);
  process(arr, L, mid);
  process(arr, mid + 1, R);

  merge(arr, L, mid, R);
}

function merge(arr, L, M, R) {
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


const arr = [3, 9, 4, 7, 6, 1, 6, 3]
console.log(mergeSort(arr))