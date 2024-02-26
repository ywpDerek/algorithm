// 异或运算2

// 一个数组中有两种数出现了奇数次，其他数都是出现了偶数次
// 找出这个两个数


// arr 中一定有两个不同的数出现了奇数次

const func = (arr) => {
  let eor = 0;

  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }

  // eor 为 a ^ b 并且不等于0

  // 二进制下 提取出最右侧的 1
  // eor          1011000
  // ~eor         0100111
  // ~eor+1       0101000
  // eor&(~eor+1) 0001000
  let rightOne = eor & (~eor + 1);
  let onlyOne = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((rightOne & arr[i]) !== 0) {
      onlyOne ^= arr[i];
    }
  }

  return `${onlyOne} 和 ${eor ^ onlyOne}`;
}


const arr = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4];

console.log(func(arr));