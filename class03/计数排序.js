// 计数排序
// 计数排序是对传入数据规模有一定限制的排序方法

function countSort(arr) {
  const countArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] = countArr[arr[i]] ? countArr[arr[i]]++ : 1; 
  }

  let j = 0;
  countArr.forEach((item, index) => {
    if (item) {
      while (item > 0) {
        arr[j] = index;
        j++;
        item--;
      }
    }
  });
  return arr;
}

const arr = [3, 1, 5, 8, 4, 0];
console.log(countSort(arr));