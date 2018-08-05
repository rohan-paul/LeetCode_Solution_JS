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



}
/*
This question has three requirements:

no division
O(n) time complexity
O(1) space complexity

What can be done within O(n) time?

Scan the whole array once (often from the start to the end).

What about scan the array again?

Yes. It is still O(n) time ( O(2n)=O(n) ).
What about scan n times?

No. It is O(n∗n)=O(n2)

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

Note that, these products include the current element, so by adding a "1" in front of the product arrays will do fine:
P_forward =    [1, 1,  2,   6,  24]
P_backward =   [1, 4,  12,  24, 24]

then, the final results can be easily computed:

res[0] = P_forward[0] * P_backward[3] = 24  means   (In original array -> product before [0] * product from last to [1])   means ( 1 * 24)

res[1] = P_forward[1] * P_backward[2] = 12     (product before [1] * product from last to [2])

res[2] = P_forward[2] * P_backward[1] = 8      ( )

res[3] = P_forward[3] * P_backward[0] = 6

res = [24, 12, 8, 6]


Now the problem is solved but:
O(1) space complexity
If you check it carefully,

P_forward can be stored in the output array
P_backward is actually not necessary, each time we compute one value, multiply it to correct P_forward, then the P_backward value can be overwritten for the next computation.
Therefore, we have one output array of length n (which is not count as extra space as in the question description), one int for P_backward, one int for loop. It is O(1)!

*/