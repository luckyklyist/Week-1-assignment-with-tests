/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let reverseStr=str.toUpperCase().split('').reverse().join('').replace(/[\s\W]/g, "");
  if (str.toUpperCase().replace(/[\s\W]/g, "")===reverseStr || str.length===1){
    return true
  }
  console.log(reverseStr)
  return false;
}

console.log(isPalindrome("Mr. Owl ate my metal worm."))

module.exports = isPalindrome;

