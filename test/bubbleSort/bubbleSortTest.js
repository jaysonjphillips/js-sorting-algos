var assert = require('assert');
var sort = require('../../src/bubbleSort/bubbleSort.js');

describe('BubbleSort', function() {
    describe('bubbleSort', function() {
        it('should return a properly sorted array when a valid array is passed', function() {
            assert.deepEqual([-1,2,5,8,300], sort([300, 2,8,-1,5]));
        });
    });
});