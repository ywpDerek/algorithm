// 堆排序

function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  // O(N * logN)
  // for (let i = 0; i < arr.length; i++) {
  //   heapInsert(arr, i); // O(logN)
  // }

  // O(N)
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  let heapSize = arr.length;
  swap(arr, 0, --heapSize);

  while (heapSize > 0) {
    // O(N)
    heapify(arr, 0, heapSize); // O(logN)
    swap(arr, 0, --heapSize); // O(1)
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapInsert(arr, index) {
  while (arr[index] > arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1);
    index = (index - 1) >> 1;
  }
}

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

const arr = [4, 6, 3, 0, 2, 1, 8, 9];
heapSort(arr);
console.log(arr);
