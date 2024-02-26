// 二分查找 - 局部最小问题

// 假设数组长度 为 n 最后一位 也就是 n - 1 位置

// [0] < [1]  0 是局部最小
// [n - 1] < [n - 2]     n - 1 是局部最小
// [i - 1] > [i] < [i + 1]   i 是局部最小


// arr 无序 且数组内部相邻的不相等  返回任意局部最小的位置

const func = (arr) => {
  let i = 0
  let j = arr.length - 1
  let mid = 0

  if (arr[0] < arr[1]) {
    return 0
  }

  if (arr[j] < arr[j - 1]) {
    return j
  }

  while (i <= j) {
    mid = i + ((j - i) >> 1)

    if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      return mid
    } else if (arr[mid] < arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      i = mid
    } else {
      j = mid
    }
  }
}

console.log(func([6, 2, 3, 1, 5, 6])) // 1