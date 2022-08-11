/*
  ---
  PROMPT
  ---
  Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

  ---
  EXAMPLES
  ---
  Input: rowIndex = 3
  Output: [1,3,3,1]

  Input: rowIndex = 0
  Output: [1]

  Input: rowIndex = 1
  Output: [1,1]

*/

// if only left or only right, return parent value (assumption - the edges of each row will be 1 row[0] || row[row.length - 1])
var getRow = function(rowIndex) {
  //  base case
  //
  };