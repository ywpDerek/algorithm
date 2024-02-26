// 异或运算1

// 一个数组中有一种数出现了奇数次，其他数都是出现了偶数次
// 找出这个数


const func = (arr) => {
  let eor = 0;

  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i]
  }

  return eor
}

const arr = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]

console.log(func(arr))
