/* https://leetcode.com/problems/product-of-array-except-self/description/#_=_

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

*/

productExceptSelf = arr => {

    if (arr.length ===0) return;

    let result = []

    let left = 1

    /* calculate the forward array starting from 0-th index till end of the array. And I am staring with i=1, because, like explained below, I need to set the first multiplier to 1 for both my forward array-multiplication calculation and backward array-multiplication calculation */
    for (let i = 0; i < arr.length; i++) {

        result[i] = left;
        left *= arr[i]
    }

    /* Now build the backward array-multiplication*/

    let right = 1;

    for (let j = arr.length - 1; j >=0; j--) {
        result[j] = result[j] * right;
        right *= arr[j]
    }
    return result;
}

let input =  [1,2,3,4]  // => The Output should be [24,12,8,6]

console.log(productExceptSelf(input))
/* GOOD EXPLANATION - 1 - https://yucoding.blogspot.com/2016/04/leetcode-question-product-of-array.html?showComment=1533484700200#c5983446391438689683

This question has three requirements:

no division
O(n) time complexity
O(1) space complexity

What can be done within O(n) time? - Scan the whole array once (often from the start to the end).

What about scan the array again?

Yes. It is still O(n) time ( O(2n)=O(n) ).

What about scan n times?

No. It is O(n∗n)=O(n^2)

From the question above, we know that, at least we could scan the array twice (or other countable number if needed.).

OK, let's scan the array from start to end, e.g., [1,2,3,4]

The accumulated products can then be saved:

P_forward = [1, 1*2, 1*2*3, 1*2*3*4] = [1, 2, 6, 24]


Let's get back to the problem, we need to get the product of all nums without current position, intuitively:
nums = [1, 2, 3, 4], for position 2 where nums[2] = 3, the product we want to have can be viewed:

left = 1*2
right  = 4

p = left * right

We already have the accumulated product from our first scanning, P_forward = [1, 2, 6, 24], which means, P_forward[i] = product from 0 to i. What about the product from i+1 to end?

The backward product is computed by scanning the array backward:
P_backward = [4, 4*3, 4*3*2, 4*3*2*1 ]
P_backward = [4, 12, 24, 24]

SO THE KEY POINT - PAUL - The significance of the P_forward is its taking care of the left side multiplication and P_backwards is taking care of the right side multiplication. And at each index position of the final result array, I have to multiply all the element of the left and all the elements on the right. Thats why I am building 2 arrays and multiplying them to get the final array.

*** Note that, these products include the current element, so by adding a "1" in front of the product arrays will do fine: ***

P_forward =    [1, 1,  2,   6,  24]
P_backward =   [1, 4,  12,  24, 24]

then, the final results can be easily computed:

res[0] = P_forward[0] * P_backward[3] = 24  means   (In original array -> product before [0] * product from last to [1])  i.e.  ( 1 * 24)

res[1] = P_forward[1] * P_backward[2] = 12  means   (In original array -> product before [1] * product from last to [2])  i.e.  ( 1 * 12 )

res[2] = P_forward[2] * P_backward[1] = 8  means  (In original array -> produce before [2] * [ product from last to [3] means [3] itself ) i.e. ( 2 * 4 )

res[3] = P_forward[3] * P_backward[0] = 6  means ( In original array -> product before [3] * product after [3])  i.e. ( )


Few points in the above equation

A) product before [0]  >> there is nothing before [0] so, we have added just a dummy element which is 1. So product before [0] is 1

B) product before [1] >> Means the first element of the original array ie. [0]

res = [24, 12, 8, 6]


Now the problem is solved but: Lets check whether I meet the O(1) space complexity condition -

P_forward can be stored in the output array
P_backward is actually not necessary, each time we compute one value, multiply it to correct P_forward, then the P_backward value can be overwritten for the next computation.
Therefore, we have one output array of length n (which is not count as extra space as in the question description), one int for P_backward, one int for loop. It is O(1)!


GOOD EXPLANATION - https://www.youtube.com/watch?v=vB-81TB6GUc
*/