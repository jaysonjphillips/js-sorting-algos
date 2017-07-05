'use strict'

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }

    let length = arr.length; 
    let arraySplit = Math.floor(length / 2);
    let arrayLeft = arr.slice(0, arraySplit);
    let arrayRight = arr.slice(arraySplit);

    return arrayMerge(mergeSort(arrayLeft), mergeSort(arrayRight));
}

function arrayMerge(leftArray, rightArray) {
    let result = [];

    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]) {
            result.push(leftArray.shift());
        } else {
            result.push(rightArray.shift());
        }
    }

    while(leftArray.length) {
        result.push(leftArray.shift());
    }

    while(rightArray.length) {
        result.push(rightArray.shift());
    }

   return result;
}

module.exports = mergeSort;