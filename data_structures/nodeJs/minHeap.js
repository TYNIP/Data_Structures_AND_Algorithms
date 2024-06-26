class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
  //remove min 
    popMin() {
      if (this.size === 0) {
        return null 
      }
      const min = this.heap[1];
      this.heap[1] = this.heap[this.size];
      this.heap.pop();
      this.size--;
      this.heapify();
      return min;
    }
  
    add(value) {
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
    }

    bubbleUp() {
      let current = this.size;
      let swapCount = 0;
      while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
        this.swap(current, getParent(current));
        current = getParent(current);
        swapCount++;
      }
      if (this.size == 10000) {
        console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
      }
    }
  
    heapify() {
      let current = 1;
      let leftChild = getLeft(current);
      let rightChild = getRight(current);
      let swapCount = 0;
  
      while (this.canSwap(current, leftChild, rightChild)) {
        if (this.exists(leftChild) && this.exists(rightChild)) {
  
          if (this.heap[leftChild] < this.heap[rightChild]) {
            this.swap(current, leftChild);
            current = leftChild;
        swapCount++;
          } else {
            this.swap(current, rightChild);
            current = rightChild;
        swapCount++;
          }
        } else {
          this.swap(current, leftChild);
          current = leftChild;
      swapCount++;
        }
        leftChild = getLeft(current);
        rightChild = getRight(current);
  
      }
      if (this.size == 9999) {
        console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
      }
    }
  
    exists(index) {
      return index <= this.size;
    }
  
    canSwap(current, leftChild, rightChild) {
      return (
        this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
        || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
      );
    }
  
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = MinHeap;

/* TEST IT */

/* 
N = 2^ℎ+1 − 1
*/
/* const minHeap = new MinHeap();

// populate minHeap with descending numbers from 10001 to 1
console.log('Adding');
for (let i=10000; i >=1; i--) {
  minHeap.add(i);
}

// remove the minimum value from heap
console.log('Removing');
console.log('Minimum value = ' + minHeap.popMin()); */
