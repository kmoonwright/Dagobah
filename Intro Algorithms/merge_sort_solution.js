// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. Make sure that 
// `merge` is defined on the window. Do NOT call the built-in 
// `Array.prototype.sort` method in your implementation.
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.



Array.prototype.mergeSort = function (callback) {
  if (this.length < 2) return this;

  if (!callback) callback = (left, right) => (left < right) ? -1 : left > right ? 1 : 0;

  const mid = Math.floor(this.length / 2);
  const left = this.slice(0, mid);
  const right = this.slice(mid);

  const sortedLeft = left.mergeSort(callback);
  const sortedRight = right.mergeSort(callback);

  return merge(sortedLeft, sortedRight, callback)
};

function merge(arr1, arr2, callback) {
  const merged = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (callback(arr1[0], arr2[0]) === -1) {
      const el = arr1.shift();
      merged.push(el);
    } else {
      const el = arr2.shift();
      merged.push(el);
    }
  }

  return merged.concat(arr1).concat(arr2);
}




Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) return this;

  if (!func) func = (left,  right) => {
    // return left < right ? -1 : left > right ? 1 : 0;
    return left < right ? -1 : 1;
  };

  const midpoint = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, midpoint).mergeSort(func);
  const sortedRight = this.slice(midpoint).mergeSort(func);
  return merge(sortedLeft, sortedRight, func);
};

function merge (left, right, comparator) {
  let merged = [];

  while (left.length && right.length) {
    switch(comparator(left[0], right[0])) {
      case -1:
        merged.push(left.shift());
        break;
      case 0:
        merged.push(left.shift());
        break;
      case 1:
        merged.push(right.shift());
        break;
    }
  }

  merged = merged.concat(left, right);
  return merged;
}


