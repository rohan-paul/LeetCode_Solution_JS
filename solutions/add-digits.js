/*https://leetcode.com/problems/add-digits/description/#_=_

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?*/

// My solution using recursion

var addDigits = function(num) {
    if(num < 10) {
		return num;
	} else {
		var str = num.toString().split('');		
		var repeatSum = str.reduce(function(prev, curr) {
			return parseInt(prev, 10) + parseInt(curr, 10);			
		});
		return addDigits(repeatSum);
	}
    
};

// console.log(addDigits(9));
// 
// git@github.com:rohan-paul/Javascript-Interview_Problems-Challenges.git


//Beautiful solution without using recursion
/*
A> If the given num is less than 10 then num % 9 would always given that num
B> But for the specific case when the num is 9, I have to get the result of 9, so to cover this specific case I do - (1+(9-1)%9)

this method depends on theis math Eqn for decimal number:

N=(a[0] * 1 + a[1] * 10 + …a[n] * 10 ^n),and a[0]…a[n] are all between [0,9]

we set M = a[0] + a[1] + …a[n]

and another truth is that:

1 % 9 = 1

10 % 9 = 1

100 % 9 = 1

so N % 9 = a[0] + a[1] + …a[n]

means N % 9 = M

so N = M (% 9)

as 9 % 9 = 0,so we can make (n - 1) % 9 + 1 

 */
var addDigits = function(num) {
	return 1+((num-1)%9);
}

console.log(addDigits(38));