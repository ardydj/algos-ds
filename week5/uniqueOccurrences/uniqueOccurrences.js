/*
uniqueOccurrences.js
---
PROMPT
---
Given an array of integers arr, write a function that returns true if and
only if the number of occurrences of each value in the array is unique.
---
EXAMPLES
---
Example 1
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2
Input: arr = [1,2]
Output: false
Example 3
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
---
CONSTRAINTS
---
  1) 1 <= arr.length <= 1000
  2) -1000 <= arr[i] <= 1000
 */

/*
O: boolean; true if occurrences are unique, false otherwise
I: array of intergers
C: use hash table
E: will never be empty

ex: [1, 1, 1, 2, 0, 2] -> true

*/
var uniqueOccurrences = function (arr) {

  let occurrences = {};
  arr.forEach((num) => {
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  })

  let uniqueOccurrence = new Set();
  for (key in occurrences) {
    if (uniqueOccurrence.has(occurrences[key])) {
      return false;
    } else {
      uniqueOccurrence.add(occurrences[key]);
    }
  }

  return true;
}

console.log(uniqueOccurrences([1, 1, 1, 2, 0, 2]));
console.log(uniqueOccurrences([1, 1, 1, 2, 0, 0, 2]));
console.log(uniqueOccurrences([1, 1, 1, 2, 0, 0, 2, 2]));
console.log(uniqueOccurrences([0, 0, 0, 0, 0, 0, 0, 0]));
