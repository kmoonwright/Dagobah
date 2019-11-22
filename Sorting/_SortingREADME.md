SORTING Algorithms arranged by Big O


SLOW
Bubble Sort
	Bubbles LARGEST elements up to the end of the array. Checks if any adjacent elements are out of order and swaps them if they are. If we don't make any swaps during a pass, then everything must be already in order.
	Time Complexity: O(n^2)
	Space Complexity: O(1)
	
Selection Sort
	Similar to Bubble Sort, but selects SMALLEST elements of the array and places them at the beginning of the array in sorted position. Only swaps once our inner loop has completely finished traversing the array, thus is optimized to make the least number of swaps.
	Time Complexity: O(n^2)
	Space Complexity: O(1)
	
Insertion Sort
	Sorts each element in the order they appear from left to right, regardless of their value, inserting them in the most appropriate place in the sorted region.
	Time Complexity: O(n^2)
	Space Complexity: O(1)


MEDIUM
Merge Sort - Divide and Conquer
	The array is broken into smaller and smaller subarrays recursively, then combined.
	Time Complexity: O(n log n)
	Space Complexity: O(n)
	
Quick Sort
	Select one element as a pivot and divide the input array into subarrays whether it is larger or smaller than the pivot. Recursively call QuickSort on each subarray.
	Time Complexity: O(n log n)
		Can be O(n^2) depending on the pivot, though this is rare
	Space Complexity: O(n)


FAST
Radix Sort - Integer Sorting
	
	Time Complexity: O(n log n)
	Space Complexity: O(n + k)
		Memory consumed relative to size of input array and length of longest integer
	
	
Counting Sort - Integer Sorting, but must know LARGEST INTEGER
	Allocates an array of counters k elements long, where k is the largest integer in the input. Upon initialization, each element of new counter array is set to zero, iterate across the input array and increment the counter at the index that is equal to the number we have just approached in our input by one.
	Time Complexity: O(n + k)
	Space Complexity: O(k)
Where k is the largest integer in the input array