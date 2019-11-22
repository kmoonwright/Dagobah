// Selection Sort
// Similar to Bubble Sort, but selects SMALLEST elements of the array and places them
// at the beginning of the array in sorted position.Only swaps once our inner loop has 
// completely finished traversing the array, thus is optimized to make the least number of swaps.

// SLOW
// Time Complexity: O(n ^ 2)
// Space Complexity: O(1)


function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        swap(arr, i, minIndex);
    }
    return arr;
}