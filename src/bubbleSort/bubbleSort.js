'use strict'

function bubbleSort(arr) {
  let sorted = false;

  while(!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      let cache = arr[i];
      if (arr[i + 1] < arr[i] ) {
        arr[i] = arr[i + 1];
        arr[i + 1] = cache;
        sorted = false;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
