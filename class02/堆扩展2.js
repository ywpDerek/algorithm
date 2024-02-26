
// 和 扩展1 中实现相同的代码，目前代码存在问题
// 小根堆
function heapInsert(arr, index) {
  while (arr[index] < arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1);
  }
}

function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;

  while (left < heapSize) {
    let small = left + 1 < heapSize && arr[left + 1] < arr[left] ? left + 1 : left;

    small = arr[small] < arr[index] ? small : index;

    if (small === index) {
      break;
    }

    swap(arr, small, index);
    index = small;
    left = index * 2 + 1;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// k 是元素所能移动的最大距离
const func = (arr, k) => {
  if (arr === null || arr.length < 2) {
    return arr;
  }

  let i = 0;
  let j = k + 1;

  const help = arr.slice(0, k + 1);
  
  // help 变成 小根堆
  for (let i = help.length; i >= 0; i--) {
    heapify(help, i, help.length);
  }
  console.log(help, 'help');
  console.log(arr, 'arr');

  while (j < arr.length) {
    arr[i++] = help[0];
    help[0] = arr[j++];
    heapify(help, 0, help.length);
  }

  let sign = 1;
  while (sign <= help.length) {
    arr[arr.length - sign] = help[help.length - sign];
    sign++
  }
}

// const arr = [1, 2, 4, 7, 5, 7, 4, 3, 1, 0, 8, 1, 9];
const arr = [4, 2, 5, 0, 1];
func(arr, 2);
console.log(arr);