/*

Solution walkthrough (including additional memory approach with improvement to O(1) solution)
on Leetcode: https://leetcode.com/problems/set-matrix-zeroes/solution/

This O(1) solution below assumes all integers in the matrix array are >= -9999.

*/

var setMatrixZeros = function(matrix) {

    let isCol = false;
    let R = matrix.length;
    let C = matrix[0].length;

    for (let i = 0; i < R; i++) {

      // Since first cell for both first row and first column is the same i.e. matrix[0][0]
      // We can use an additional variable for either the first row/column.
      // For this solution we are using an additional variable for the first column
      // and using matrix[0][0] for the first row.
      if (matrix[i][0] == 0) {
        isCol = true;
      }

      for (let j = 1; j < C; j++) {
        // If an element is zero, we set the first element of the corresponding row and column to 0
        if (matrix[i][j] == 0) {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    }

    // Iterate over the array once again and using the first row and first column, update the elements.
    for (let i = 1; i < R; i++) {
      for (let j = 1; j < C; j++) {
        if (matrix[i][0] == 0 || matrix[0][j] == 0) {
          matrix[i][j] = 0;
        }
      }
    }

    // See if the first row needs to be set to zero as well
    if (matrix[0][0] == 0) {
      for (let j = 0; j < C; j++) {
        matrix[0][j] = 0;
      }
    }

    // See if the first column needs to be set to zero as well
    if (isCol) {
      for (let i = 0; i < R; i++) {
        matrix[i][0] = 0;
      }
    }
};
