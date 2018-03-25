/*https://leetcode.com/problems/merge-sorted-array/description/

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
	// Start the merging process from the end (last index) of the final merged array i.e. index no ( m + n - 1)
	while ( m > 0 & n > 0) {
		if (nums1[m - 1] > nums2[n - 1]) {
			nums1[ m + n - 1] = nums1[m - 1];
			m--;
		} else {
			nums1[m + n - 1] = nums2[n - 1];
			n--;
		}
	}

	// After the previous while loop ends if there are more elements left in nums2
	while (n > 0) {
		nums1[n - 1] = nums2[n - 1];
		n--;
	}
}

// Note, I am not returning the mergerd array nums2 because the question specifically asaked for that.
// console.log(merge([1,5,6], 3, [0,1,8,9], 4));