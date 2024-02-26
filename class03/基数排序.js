// 基数排序

// 对 arr 上 [ L ... R ] 进行排序
// digit代表的是 数组中最大值有几位
function main(arr) {
  const maxValue = Math.max(...arr);
  const digit = maxValue.toString().length;
  radixSort(arr, 0, arr.length - 1, digit);
}

function radixSort(arr, L, R, digit) {
  // 只适合 十进制 的数 所以这里面写死 就是 10
  const radix = 10;
  let i = 0;
  let j = 0;

  const bucket = new Array(R - L + 1);

  for (let d = 1; d <= digit; d++) {
    const count = Array(radix).fill(0);

    for (i = L; i <= R; i++) {
      j = getDigit(arr[i], d);
      count[j]++;
    }

    for (i = 1; i < radix; i++) {
      count[i] = count[i] + count[i - 1];
    }

    // 这里面为什么要从后往前遍历？
    // 因为我们在 count 数组里面存储的是当前位置的数字小于等于 索引的数字 的个数
    for (i = R; i >= L; i--) {
      j = getDigit(arr[i], d);
      bucket[count[j] - 1] = arr[i];
      count[j]--;
    }

    for (i = L, j = 0; i <= R; i++, j++) {
      arr[i] = bucket[j];
    }
  }
}

// 举个例子 比如说 13520 我们想取到 第四位
// 先 除以 1000 变成了 13.520 => 13
// 这个时候我们想获取到 3 就需要进行 % 10 的这个操作
function getDigit(x, d) {
  return Math.floor(x / Math.pow(10, d - 1)) % 10;
}

const arr = [22, 21, 32, 31, 100];
main(arr);
console.log(arr);
