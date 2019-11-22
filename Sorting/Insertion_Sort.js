// Insertion Sort
// Sorts each element in the order they appear from left to right, regardless of 
// their value, inserting them in the most appropriate place in the sorted region.

// SLOW
// Time Complexity: O(n ^ 2)
// Space Complexity: O(1)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currElement;
    }
    return arr;
}