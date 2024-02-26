// 二分查找

const func = (arr, k) => {
  let l = arr.length - 1

  let i = 0
  let mid = 0

  while (i <= l) {
    mid = i + ((l - i) >> 1)
    
    if (arr[mid] > k) {
      l = mid - 1
    } else if (arr[mid] < k) {
      i = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

const arr = [1, 2, 3, 4, 5]

// console.log(func(arr, 5))
console.log(func(arr, 6));