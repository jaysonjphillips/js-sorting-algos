var assert = require('assert');
var sort = require('../../src/insertionSort/insertionSort.js');

describe('insertionSort', function() {
    it('should return a properly sorted array', function() {
        assert.deepEqual([-1, 2, 5, 8, 300], sort([300, 2,8,-1,5]))
    })
})