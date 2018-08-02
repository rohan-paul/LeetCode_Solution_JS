/*Determine whether an integer is a palindrome. Do this without extra space.*/

// My solution
var isPalindrome = function (x) {
	// First reverse the string without useing any sting method.
	var y = Math.abs(x);
	var result = 0;

	while (y > 0) {
		result = result * 10 + (y % 10);
		y = parseInt(y / 10);
	}
	return result === x;
}

console.log(isPalindrome(323));

// Alternative by reversing string. But this would require extra non-constant space for creating the string
var isPalindrome1 = function(x) {
	return x.toString().split('').reverse().join('') === x.toString();
}

console.log(isPalindrome1(323));