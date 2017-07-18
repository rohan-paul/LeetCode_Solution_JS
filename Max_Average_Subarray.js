/* Original Problem Statement - Maximum Average Subarray

https://leetcode.com/contest/leetcode-weekly-contest-41/problems/maximum-average-subarray-i/

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
Note:
1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].

*/


/*My Solution thoughts - 
A) If nums is number of elements in an array and k is each window size, then the number of windows possible is = N-W+1 . So in my below example that would be 6 - 4 + 1 i.e. 3

B) Kadane's Algo - Basically I have to look for all contiguous sub-arrays of size 4, and also keep track of the maximum sum contiguous sub-array until the end. Whenever I find a new contiguous sub-array, I check if the current sum is greater than the max_sum so far and updates it accordingly.

C) In the first loop is I am just generating the sum of the sub-array of the first 4 elements.

D) In the second loop, I am traversing a sliding window - at each iteration, I am deducting the first element from left and adding next element to the right. And after doing this, updaing the max_so_far to its highest value, by comparing it to its previous hightest value.

And then the second loop 
*/

function findMaxAverage(nums,k){

  var curr_max = 0;
  for(var i = 0; i < k; i++) {
    curr_max += nums[i];      
  }

  var max_so_far = curr_max;

  for(var j = k; j < nums.length; j++) {
    curr_max += (nums[j] - nums[j-k]);
	// Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far    
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far/k;
}

console.log(findMaxAverage([1,12,-5,-6, 50,3],4));