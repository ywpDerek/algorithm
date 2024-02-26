// 荷兰国旗2

// 分 3 块
// 在 arr[] 的 [ L - R ] 中间，<p 的在左侧 =p的在中间 >p的在右边
// 返回值含义：一定会返回一个长度为 2 的数组，等于区域的左边界和右边界
// 如果没有 等于 区域，那么返回值的 左边界 > 右边界

function partition(arr, L, R, p) {
  let less = L - 1;
  let more = R + 1;

  while (L < more) {
    if (arr[L] < p) {
      swap(arr, ++less, L++);
    } else if (arr[L] > p) {
      swap(arr, --more, L);
    } else {
      L++;
    }
  }

  return [less + 1, more - 1];
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [2, 4, 4, 2, 1, 7, 8, 4, 6]

console.log(partition(arr, 0, arr.length - 1, 4))
console.log(arr)