// 堆排序扩展题目

// 已知一个几乎有序的数组，几乎有序是指，如果把数组排好顺序的话，每个元
// 素移动的距离不可以超过k，并且 k 相对于数组来说比较小。请选择一个合适
// 的排序算法针对这个数据进行排序。

function main(arr, k) {
  const smallHeap = arr.slice(0, k + 1);

  for (let i = smallHeap.length; i >= 0; i--) {
    heapify(smallHeap, i, smallHeap.length);
  }

  // for (let i = 0; i < arr.length; i++) {
  //   if (i + k + 1 < arr.length) {
  //     arr[i] = smallHeap[0];
  //     smallHeap[0] = arr[i + k + 1];
  //     heapify(smallHeap, 0, k + 1);
  //   } else {
  //     arr[i] = smallHeap[0];
  //     swap(smallHeap, 0, arr.length - i - 1);
  //     heapify(smallHeap, 0, arr.length - i - 1);
  //   }
  // }
  console.log(smallHeap, "小根堆");
  console.log(arr);

  let i = 0;

  while (i + k + 1 < arr.length) {
    arr[i] = smallHeap[0];
    smallHeap[0] = arr[i + k + 1];
    heapify(smallHeap, 0, k + 1);
    i++;
  }

  console.log(arr);
  console.log(smallHeap);

  while (i < arr.length) {
    arr[i] = smallHeap[0];
    swap(smallHeap, 0, k);
    heapify(smallHeap, 0, k);
    k--;
    i++;
  }
}

// 小根堆
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;

  while (left < heapSize) {
    let small =
      left + 1 < heapSize && arr[left + 1] < arr[left] ? left + 1 : left;
    small = arr[small] < arr[index] ? small : index;

    if (index === small) {
      break;
    }

    swap(arr, index, small);
    index = small;
    left = index * 2 + 1;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// const arr = [1, 2, 4, 7, 5, 7, 4, 3, 1, 0, 8, 1, 9];
const arr = [4, 2, 5, 0, 1];
main(arr, 2);
console.log(arr);
