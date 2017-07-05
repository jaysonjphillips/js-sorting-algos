var assert = require('assert');
var sort = require('../../src/mergeSort/mergeSort.js');

describe('mergeSort', function() {
    it('should return a properly sorted array', function() {
        assert.deepEqual([-1,2,5,8,300], sort([300, 2,8,-1,5]));
    })
})