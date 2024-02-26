// 堆结构

// arr 中 现在 0 - index-1 的位置上已经是大根堆了，某个数现在在 index 位置，继续往上移动
// 使 0 - index 的位置上面都是大根堆

// 时间复杂度 是 O(logN)  和完全二叉树的高度有关 高度就是 log2N => logN
// 在 JS 中，需要使用 (index - 1) >> 1 代替 (index - 1) / 2
// 因为后者生成的小数索引在 arr 中是找不到的
function heapInsert(arr, index) {
  while (arr[index] > arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1);
    index = (index - 1) >> 1;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [8, 4, 5, 6];

heapInsert(arr, 3);

console.log(arr);

// 某个数在 index 的位置，看看能否往下沉
// 首先获取到 index 的左右子节点，拿到两者的最大值
// 拿最大值和 index 位置的数进行比较，如果 index 的值较小，则向下移动，周而复始

function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  while (left < heapSize) {
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;

    largest = arr[largest] > arr[index] ? largest : index;

    if (largest === index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}

const arr1 = [4, 6, 5];
heapify(arr1, 0, 3);
console.log(arr1);
