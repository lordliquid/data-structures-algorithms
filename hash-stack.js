// A max number of indices can be set for each ArrayNode.
// Pushing and popping will result in auto separation of concerns.
// Example :   Create a 'HashStack' of 64 will result in 2x 32 element arrays;
// Each array is mapped by keys on the HashStack.

// This is a work in progress by Robert Cutright. Please be kind.


function ArrayNode(index) {
    this.arrayNode = {
        constructor: (function (idx) {
            this.node = new Array(32);
            this.count = new Array(32);
            this.node.fill(-1);
            this.count.fill(0);
            this.idx = idx;

            this.getVal = function (idx) {
                return this.node[idx];
             };
             this.addValue = function (value) {
                 this.node[value] = value;
                 this.count[value]++;
             }
        })(index)
    }
    return this;
}

function HashStack(len) {
    this.hashStack = {
        constructor: (function (length) {
            this.keys = {};
            this.length = length;
            this.numOfArrays = Math.ceil(this.length / 32);
            this.getNumOfArrays = function () { return this.numOfArrays };
            this.addNode = function (idx) {            
                return Object.create(ArrayNode(idx));
            };

            this.get = function (index) {
                let key = Math.ceil(index / 32);
                let result;
                if (index < 32) {
                    idx = index;
                } else {
                    idx = index - 32;
                }
                result = this.getValue(key, idx);
                return result;
            };

            this.getValue = function (key, index) {
                return this.keys[0].getVal(index);
            };

            this.push = function (value) {
                if (value > this.getNumOfArrays() * 32) {
                    // Handle this in a different way.
                    // Maybe put it in the proper index
                    console.log('Number too large');
                } else {
                    let key = Math.floor(value / 32);
                    if (value > 32 ) {
                        this.keys[key].addValue(value);
                    } else {
                        this.keys[key].addValue(value);
                    }
                }
                return 
            };

            for (let i = 0; i < this.getNumOfArrays(); i++) {
                this.keys[i] = this.addNode(i);
            }
        })(len)        
    }
    return this;
}

var arr = Object.create(HashStack(33));
arr.push(2);
arr.push(2);
arr.push(2);
console.log('keys', arr.keys[0].node)
console.log('count', arr.keys[0].count)
let val = arr.get(2);
console.log(val);