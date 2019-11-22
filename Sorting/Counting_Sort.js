// Counting Sort - Integer Sorting, but must know LARGEST INTEGER

// Allocates an array of counters k elements long, where k is the largest integer in the input. 
// Upon initialization, each element of new counter array is set to zero, iterate across the 
// input array and increment the counter at the index that is equal to the number we have just 
// approached in our input by one.

// FAST
// Time Complexity: O(n + k)
// Space Complexity: O(k)
//     Where k is the largest integer in the input array


function countingSort(arr, max) {
    const result = [];
    const counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }

    for (let i = 0; i < counters.length; i++) {
        while (counters[i] > 0) {
            result.push(i);
            counters[i]--;
        }
    }

    return result;
}
