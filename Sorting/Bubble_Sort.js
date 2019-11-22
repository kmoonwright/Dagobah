// The simplest sorting algorithm that repeatedly swaps adjacent elements 
// if they are in the wrong order.

// Bubbles LARGEST elements up to the end of the array.Checks if 
// any adjacent elements are out of order and swaps them if they are. 
// If we don't make any swaps during a pass, then everything must be 
// already in order.

// SLOW
// Time Complexity: O(n ^ 2)
// Space Complexity: O(1)

function bubbleSort(array) {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    }

    return array;
}

function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
}