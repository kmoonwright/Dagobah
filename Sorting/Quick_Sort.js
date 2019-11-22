// Quick Sort
// Select one element as a pivot and divide the input array into subarrays whether it 
// is larger or smaller than the pivot. Recursively call QuickSort on each subarray.

// Medium (acceptable)
// Time Complexity: O(n log n)
//     Can be O(n ^ 2) depending on the pivot, though this is rare
// Space Complexity: O(n)

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [...leftSorted, pivot, ...rightSorted];
}
