/*https://leetcode.com/problems/reverse-integer/description/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.*/

// My solution
var reverse = function(x) {
	var reversedX = +Math.abs(x).toString().split('').reverse().join('');
	return reversedX > 2147483647 ? 0 : x < 0 ? -reversedX : reversedX;
}

// console.log(reverse(123));

//Best Performing solution. And also if the Problems asks for not to use any string related methods.
var reverseBest = function(x) {
	var y = Math.abs(x);
	var result = 0;

	while (y !== 0) {
		var result = (result * 10) + y % 10;		
		y = parseInt(y / 10);
		// console.log(y);
	}


	x > 0 ? result = result : result = -result;
	if (result > 2147483648 || result < -2147483648) return 0;
	return result

}

console.log(reverseBest(123));

/*My note on the above best solution - The mod will return the remainder, i.e. the last digit for each iteration, starting with the last digit then the last to last and so on. So, in case of x - 123, after first iteration y % 10 will return 3, then 2, then 1
And then in the parseInt(y/10) will consecutively return 12, 1 and then 0

So, after the first execution of the iteration, the value of result will be like below
0 + 3
(3 * 10) + 2
(32 * 10 ) + 1
*/