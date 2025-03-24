function isPalindrome(word) {
  // Write your algorithm here
    return word === word.split("").reverse().join("");
}
// Test cases
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("ab")); // false

/* 
  Add your pseudocode here
  1. Define a function named `isPalindrome` that takes a single parameter `str`.
  2. Convert the string into an array of characters using `split("")`.
  3. Reverse the array using `reverse()`.
  4. Join the reversed array back into a string using `join("")`.
  5. Compare the original string with the reversed string.
  6. If they are the same, return `true` (it's a palindrome).
  7. Otherwise, return `false` (it's not a palindrome).

*/

/*
  Add written explanation of your solution here
  Convert the string into an array of characters using .split("").

  Reverse the array using .reverse().

  Convert the array back into a string using .join("").

  Compare the reversed string with the original string:

  If they are equal, return true (it's a palindrome).

  Otherwise, return false (it's not a palindrome).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
