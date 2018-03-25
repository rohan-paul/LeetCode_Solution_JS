/* https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

/*
For each iteration from i = 0 to i < s.length do the follwoing steps

A> From the given string keep pushing the chars to a "newSubStr", till there's no repeating char. Note that this newSubStr is the string, that we will be calculating the length for. And for each loop of i from 0 to s.length

B> When a char has already occurred previously (i.e. if (index !== -1 ) is true, then first I have to reset the "newSubStr" to start taking the characters from the next index and going upto the newSubStr.length because I can-not take a substring that has a repeating character. (And note that the newSubStr has been built only upto the current index value of i)

And then push this char at this index position to the resetted-newSubStr value.

C> And after all the above, at each iteration of the loop, we are reassigning the maxLen to be the max of maxLen till now and subArr.length. And by the end of all the iterations I am returning the final max.
*/

var lengthOfLongestSubstring = function (s) { 
  let newSubStr = [], maxLen = 0, index;

  for (let i = 0; i < s.length; i++) {
    index = newSubStr.indexOf(s[i]);
    if (index !== -1) {
      newSubStr = newSubStr.slice(index+1, newSubStr.length); 
  }
  newSubStr.push(s[i]);
  maxLen = Math.max(maxLen, newSubStr.length); 
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));