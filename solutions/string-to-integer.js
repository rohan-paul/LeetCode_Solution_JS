/*Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

*/
/*Regexp match >> 
	[+-]?  -- Using the square bracket [] called character set - matches any one of the characters in the bracket. So in this case, it matches the plus or the minus. 

	When ? immediately follows any of the other quantifiers (*, +, ?, {n}, {n,}, {n,m}), the matching pattern is non-greedy. That is it matches 0 or 1 time


	\d*  - matches zero or more digits.	
	*/

// My solution
var myAtoi = function (str) {
	var integer = /([+-]?\d*)/.exec(str.trim())[0];
	return isNaN(+integer) ? 0 : +integer > 2147483647 ? 2147483647 : +integer < -2147483648 ? -2147483648 : +integer;	
}

console.log(myAtoi("-2147483649"));

//Alternative solution , and faster
var myAtoi1 = function(str) {
	return Math.max((Math.min((parseInt(str) || 0), 2147483647)), -2147483648);
}

console.log(myAtoi1("-2147483649"));

/*In the above, (parseInt(str) || 0)  - this line will return 0 incase str is a NaN . And then Math.min( 0, 2147483647 ) will return 0 again.
And otherwise >> Math.min((parseInt(str) || 0), 2147483647) >> will return the corrct result that we want.
*/