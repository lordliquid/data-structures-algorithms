class Stack {

    constructor (size) {
        this.stackSize = size;
        this.stackArray = new Array(size);
        this.topOfStack = -1;
        this.stackArray.fill(-1);
        this.stackDoubleCount = 0;
    }

    push (input) {
        if (this.topOfStack <= this.stackSize) {
            this.topOfStack++;
            this.stackArray[this.topOfStack] = input;
        } else {
            this.newStack = new Stack((this.stackSize));
            this.stackArray.concat(this.newStack);
            this.stackSize += this.stackSize;
            this.stackDoubleCount++;
            console.log(this.stackSize);
        }
    }

    pop () {
        if (this.topOfStack >= 0) {
            this.stackArray[this.topOfStack] = -1;
            console.log('topofstack', this.topOfStack);
            console.log(this.stackArray[this.topOfStack])
            return this.stackArray[this.topOfStack--];
        } else {
            console.log('else pop called');
            console.log(this.topOfStack);
            this.stack
            return -1;
        }
    }

    peek () {
        return this.stackArray[this.topOfStack];
    }
}

let myStack = new Stack(2);
let size = 60;
for (let i = 0; i <= size; i++) {
    myStack.push(i);
}
for (let i = 0; i <= size*2; i++) {
    myStack.pop();
}
console.log(myStack.stackArray);
console.log('stackSize', myStack.stackSize);
console.log('Doubled', myStack.stackDoubleCount);
console.log('stackLength', myStack.stackArray.length);