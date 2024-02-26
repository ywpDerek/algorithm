// 递归 
// 找出 arr 中的最大值

const getMax = (arr) => {
  if (arr == null || !arr.length ) {
    return 
  }

  return process(arr, 0, arr.length - 1)
}

function process(arr, L, R) {
  if (L === R) {
    return arr[L]
  }

  let mid = L + ((R - L) >> 1);
  let leftMax = process(arr, L, mid);
  let rightMax = process(arr, mid + 1, R);

  return Math.max(leftMax, rightMax)
}

const arr = [1, 3, 4, 9, 5, 7, 8]

console.log(getMax(arr))