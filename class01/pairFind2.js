// 二分查找拓展

// [0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5]
// 找到 >= 2 最靠左侧的位置

const func = (arr, k) => {
  let j = arr.length - 1
  let i = 0
  let mid = 0
  let index = 0

  while (i <= j) {
    mid = i + ((j - i) >> 1)
    
    if (arr[mid] >= k) {
      index = mid
      j = mid - 1
    } else {
      i = mid + 1
    }
  }

  return index
}

const arr = [0, 0, 1, 1, 1, 3, 3, 4, 4, 5]

console.log(func(arr, 2))