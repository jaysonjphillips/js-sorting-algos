'use strict'

function selectionSort(arr) {
    var lowId = 0, tempValue, len = arr.length;

    for (var i=0; i < len; i++) {
        
        // loop through to find lowest value
        // skip iteration that i is on since that's the value we'll replace
        for(var j=i+1; j < len; j++) {
            //lowId will record the index of the lowest id
            if(arr[j] < arr[lowId]) {
                lowId = j;
            }
        }

        // save the swapped value at current i to temp
        tempValue = arr[i];
        arr[i] = arr[lowId];
        arr[lowId] = tempValue;
    }

    console.log(arr)
}