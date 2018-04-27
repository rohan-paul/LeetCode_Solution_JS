/* https://leetcode.com/problems/3sum/description/
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero. Note: The solution set must not contain duplicate triplets. Example: Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/* My First solution which is CORRECT BUT WITH IT I GOT A FAILURE SAYING "TIME LIMIT EXCEEDED. Tried 2 times"

Explanation - The requirement is to find all unique triplets in the array (The solution set must not contain duplicate triplets.). This means in the resultant array, no number would be repeated. So, I wil achieve this with the following 2 techniques.

A> First sort the array. So if there are multiple numbers, like two 5's they will come sequentially.

B> Then, within the loop, I will check for each iteration that the current element that I am taking is not === previous element.

Complexity Analysis -
Time complexity : O(n^3)
Because each of these nested loops executes n times, the total time complexity is $$O(n^3)$$, where n is a size of an array.

Space complexity : O(n^2). If we assume that resultant array is not considered as additional space we need $$O(n^2)$$ space for storing triplets in a set.
*/

 var threeSum = function(nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  let uniqueTriplets = [];
  let i, j, k;
  let len = nums.length;

  for (i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;  // The continue statement "jumps over" one iteration in the loop. So, if 2 successive elements are same (i.e. duplicates) leave this iteration and jump over to the next one

    for (j = i + 1; j < len; j++) {
      if ( j > i + 1 && nums[j] === nums[j-1]) continue;

      for (k = j + 1; k < len; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;

        if ((nums[i] + nums[j] + nums[k]) === 0) {
          uniqueTriplets.push([nums[i], nums[j], nums[k]]);
          // Very imp - I am wrapping individual elements nums[i], nums[j], nums[k] into a wrapper-array in the .push function. So that the final output comes in multiple array as required by the original problem statement.
        }
      }
    }
  }
  return uniqueTriplets;
 }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/* Alternative Solution in O(n^2) order
A> First sort the array from lowest to highest.

B> Now with each iteration of the first for loop, keeping a's value constant, I am looping the values of the next 2 variables b and c to check if (a + b + c = 0). b starting from indexA + 1 and increasing and c starting from the end of the array nums.length -1 and decreasing.

C> If I see that the result (sum of Triplets i.e a + b + c) is more than zero, I can decrement from right-most elements to reach zero.
And if the result is less than zero, I increment the b (middle element in the triplet) elements value.

D> After all values of b and c are exhausted, I go back to the next iteration of the for loop for the next value of a.

 Given a has the lowest value after sorting the array, and with each value of a, I have already checked for all values of b and c  to check if sum is zero - as soon as 'a' becomes > 0 I can return from the function. Because it means I have reached a point where all the subsequent values of the array will be higher than zero. So no point in iterating further.

E> And 'a' will only take value upto (nums.length - 3) as the last 2 values will be taken by the subsequent 2 variables b and c

G>
*/
var threeSum2 = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA];

    if (a > 0) return result;
    if (a === nums[indexA - 1]) continue;

    let indexB = indexA + 1;
    let indexC = nums.length - 1;

    // Now check if sum is zero, and if NOT, then run the next set of 2 if loop to update indexB and indexC
    while (indexB < indexC) {
      const b = nums[indexB];
      const c = nums[indexC];

      if ((a + b + c) === 0) {
        result.push([a, b, c]);
      }

      // Now with the below 2 if functions, I am just implementing how the indexB and indexC will be incremented and decremented with each iteration and gets feeded back to the above while function ( while (indexB < indexC ))

      if ((a + b + c) >= 0) {
        while (nums[indexC - 1] === c) { indexC--; }
        indexC--;
      }

      if((a + b + c ) <= 0) {
        while (nums[indexB + 1] === b) { indexB++ }
        indexB++
      }
    }
  }
  return result;

}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));