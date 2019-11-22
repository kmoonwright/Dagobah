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

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val, root = this.root) {
        const newNode = new TreeNode(val);
        if (!root) {
            this.root = newNode;
            return;
        }
        if (val < root.val) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insert(val, root.right)
            }
        }
    }

    searchRecur(val, root = this.root) {
        if (!root) return false;

        if (val < root.val) {
            return this.searchRecur(val, root.left)
        } else if (val > root.val) {
            return this.searchRecur(val, root.right)
        } else {
            return true;
        }
    }

    searchIter(val, root = this.root) {
        if (!this.root) return false;

        while (root) {
            if (val === root.val) {
                return true;
            } else if (val < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BinarySearchTree
};