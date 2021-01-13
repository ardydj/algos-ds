/*
WEEK 3, DAY 5
setMatrixZeros.js

---
PROMPT
---

Given an m x n matrix. If an element is 0, set its entire row and column to 0. Modify the
matrix in-place. In other words, your solution should have a space complexity of 0(1).

---
EXAMPLES
---

Input: [
    [1,1,1],
    [1,0,1],
    [1,1,1]
]
Output: [
    [1,0,1],
    [0,0,0],
    [1,0,1]
]



Input: [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]
Output: [
    [0,0,0,0],
    [0,4,5,0],
    [0,3,1,0]
]

---
CONSTRAINTS
---

    1) m == matrix.length
    2) n == matrix[0].length
    3) 1 <= m, n <= 200
    4) -2^31 <= matrix[i][j] <= 2^31 - 1


*/

var setMatrixZeros = function(matrix) {
    var zeroRow;
    var zeroColumn;
    let lastRow = matrix.length - 1;

    let checkMatrixZeros = function (startRowIndex, endRowIndex) {
        let row = matrix[startRowIndex];

        for (let i = 0; i < row.length; i++) {
            let column = row[i];
            if (column === 0) {
                zeroRow = startRowIndex;
                zeroColumn = i;
                matrix[startRowIndex] = row.map((column) => column = 0);
                i = row.length;
            } else if (i === zeroColumn) {
                row[i] = 0;
            }
        }

        if (startRowIndex < endRowIndex) {
            checkMatrixZeros(startRowIndex + 1, endRowIndex);
        }
    }

    checkMatrixZeros(0, lastRow);
    if (zeroRow) {
        checkMatrixZeros(0, zeroRow - 1);
    }

    return matrix;

};
// we need to keep track of m index to reset all element to zero
// we need to keep track n index to reset each element in every row with the same n index (column)

let testInput1 = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
];

console.log(setMatrixZeros(testInput1));