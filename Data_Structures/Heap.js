// HEAP
// A complete tree in which all nodes are in a specific order. A heap is a maximally 
// efficient implementation of a priority queue.
    
//     TYPES:
//     Max-Heap - The root node must be greater than all of its children. The value 
//         of each node is less than or equal to the value of its parent.The same must 
//         be recursively true for all sub-trees in the Binary Tree.

//     Min-Heap: The root node must be less than all of its children. The value of each 
//         node is greater than or equal to the value of its parent. The same must be 
//         recursively true for all sub-trees in the Binary Tree.

// Time Complexity Analysis
// insert: O(log(n))
// deleteMax: O(log(n))
// Recall that our heap will be a complete / balanced tree.This means it 's height is log(n) 
// where n is the number of items. Both insert and deleteMax have a time complexity of log(n) 
// because of siftUp and siftDown respectively.

// Space Complexity Analysis
// O(n), since we use a single array to store heap data.

function isMaxHeap(array, idx = 1) {
    for (idx + 1; idx < array.length - 1; idx++) {
        let leftChild = array[idx * 2];
        let rightChild = array[idx * 2 + 1];
        if (array[idx] > array[1] || array[idx] < leftChild || array[idx] < rightChild) return false;
    }
    return true;
}


class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < this.array[idx]) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();

        if (this.array.length === 1) return null;

        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        let arr = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = arr[leftIdx];
        let rightVal = arr[rightIdx];
        let swapIdx;

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (arr[idx] > leftVal && arr[idx] > rightVal) return;

        if (leftVal < rightVal) {
            swapIdx = rightIdx;
        } else {
            swapIdx = leftIdx;
        }

        [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];
        this.siftDown(swapIdx);
    }
}

module.exports = {
    isMaxHeap,
    MaxHeap
};