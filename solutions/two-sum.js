/*https://leetcode.com/problems/two-sum/description/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// My Solution
var twoSum = function (nums, target) {
	var result = [];
	
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(i);
				result.push(j);
			}
		}		
	}
	return result;
}

// console.log(twoSum([2, 7, 11, 15], 17));
/* Complexity Analysis of above solution by me - https://leetcode.com/problems/two-sum/solution/

 Time complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n)O(n) time. Therefore, the time complexity is O(n^2). Space complexity : O(1). */

// Alternative solution
var twoSumAlt = function(nums, target) {
	var result = [];
	nums.forEach(function(num, i) {
		var diff = target - num;
		var k = nums.indexOf(diff);
		if ( k > -1 && k !== i) {
			result.push(i);
			result.push(k);
		}
	});
	return result;
}

/*There are 3 approaches to this solution:

Let the sum be T and n be the size of array

Approach 1:
The naive way to do this would be to check all combinations (n choose 2). This exhaustive search is O(n2).

Approach 2:  
 A better way would be to sort the array. This takes O(n log n) 
Then for each x in array A, use binary search to look for T-x. This will take O(nlogn).
So, overall search is  O(n log n)

Approach 3 : 
The best way would be to insert every element into a hash table (without sorting). This takes O(n) as constant time insertion.
Then for every x, we can just look up its complement, T-x, which is O(1).
Overall the run time of this approach is O(n).*/

/*Best Solution in O(n) time - 

https://leetcode.com/problems/two-sum/solution/

Here, under the first for loop, I am doing a < numsObject[num] = i > which means, I am assigning the actual array element value to be the key in the key-value pair of the object / associative-array. And the index-no of that element (i) of that array to be the value in the key-value object.
Then with each iteration, will check with hasOwnPropery() if the key exists. And the key will be the other element, i.e. the difference from the target.
We reduce the look up time from O(n)O(n) to O(1)O(1) by trading space for speed. A hash table is built exactly for this purpose, it supports fast look up in near constant time. I say "near" because if a collision occurred, a look up could degenerate to O(n)O(n) time. But look up in hash table should be amortized O(1)O(1) time as long as the hash function was chosen carefully.
*/
function twoSum_On_Best(arr, target) {
	let numObject = {};
	for (var i = 0; i < arr.length; i++) {
		let thisNum = "" + arr[i];
		numObject[thisNum] = i;
	}
	for (var i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (numObject.hasOwnProperty(diff.toString()) && numObject[diff.toString()] !== i) {
			return [i, numObject[diff.toString()]];
		}
	}
}
console.log(twoSum_On_Best([2, 7, 11, 15], 9));

/*Complexity Analysis of the aboe best-case O(n) time solution.

Time complexity : O(n)O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1)O(1), the time complexity is O(n)O(n).

Space complexity : O(n)O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.
*/


/* Performance Test // First create a random array with 3000 element

var arr = Array.from({length: 3000}, () => Math.floor(Math.random() * 3000));


console.time("MySolution");
twoSum(arr, (arr[668] + arr[1669]));
console.timeEnd("MySolution");

console.log("*******************************");

console.time("Alt-1");
twoSumAlt(arr, (arr[668] + arr[1669]));
console.timeEnd("Alt-1");

console.log("*******************************");

console.time("O(n)-Best");
twoSumO_nBest(arr, (arr[668] + arr[1669]));
console.timeEnd("O(n)-Best");
*/