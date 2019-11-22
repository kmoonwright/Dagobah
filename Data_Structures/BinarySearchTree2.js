// TREE
// A nonlinear data structure composed of nodes that hold data. These nodes are connect 
// by edges that define a parent and child relationship.Trees are not organized 
// sequentially, instead they are organized through relationships or hierarchy.

//     CHARACTERISTICS:
//     Full - every node has either zero or two children, nodes do not have only one child.

//     Complete - every level in the tree is fully filled with the possible exception of 
//         the last  level, which should be filled from left to right.

//     Perfect - is both full and complete, and must have 2 ^ (n - 1) nodes.
    
//     TYPES:
//     Binary Tree - A tree where all nodes have a maximum of two children.

//     Binary Search Tree - A tree where every node follows the ordering principle:
//         left descendants <= n < right descendants
//         Time complexity: O(log n)

function BinarySearchTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
    let subtree = value < this.value ? 'left' : 'right';
    if (this[subtree]) {
        this[subtree].insert(value);
    } else {
        this[subtree] = new BinarySearchTree(value);
    }
};

BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) {
        return true;
    }
    let subtree = value < this.value ? 'left' : 'right';
    if (this[subtree]) {
        return this[subtree].contains(value);
    } else {
        return false;
    }
};