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