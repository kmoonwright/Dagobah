// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.
function binarySearch(array, target) {
  if (array.length === 0) return -1;
  
  const midpoint = Math.floor(array.length / 2);
  if (array[midpoint] > target) {
    return binarySearch(array.slice(0, midpoint), target);
  } else if (array[midpoint] < target) {
    const subResult = binarySearch(array.slice(midpoint + 1), target);
    return subResult === -1 ? -1 : subResult + midpoint + 1;
  } else {
    return midpoint;
  }
}


function binarySearch(array, target) {
  if (array.length === 0) return -1;
  
  const midpoint = Math.floor(array.length / 2);
  if (array[midpoint] > target) {
    return binarySearch(array.slice(0, midpoint), target);
  } else if (array[midpoint] < target) {
    const subResult = binarySearch(array.slice(midpoint + 1), target);
    return subResult === -1 ? -1 : subResult + midpoint + 1;
  } else {
    return midpoint;
  }
}


function binarySearch(sortedArray, target) {
  if (sortedArray.length === 0) return -1;
  const midIdx = Math.floor(sortedArray.length / 2);
  const mid = sortedArray[midIdx]

  if (mid === target) {
    return midIdx;
  } else if (mid < target) {
    const right = sortedArray.slice(midIdx + 1);
    const found = binarySearch(right, target);
    return found === -1 ? -1 : midIdx + found + 1;
  } else {
    const left = sortedArray.slice(0, midIdx);
    return binarySearch(left, target);
  }
}