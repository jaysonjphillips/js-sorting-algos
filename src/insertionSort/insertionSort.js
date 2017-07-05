'use strict'

function insertionSort(arr) {
    let cache, currentPosition;

    for (let i = 0; i < arr.length; i++) {
        cache = arr[i];
        currentPosition = i;

        while(currentPosition > 0 && arr[currentPosition - 1] > cache) {
            arr[currentPosition] = arr[currentPosition - 1];
            currentPosition--;
        }

        arr[currentPosition] = cache;
    }
    return arr;
}

module.exports = insertionSort;