/*
WEEK 4, DAY 3
idealPivot.js

---
PROMPT
---
Now that we have discussed the logic and algorithms for alphabetizing
a bookshelf using Quicksort, it is time to improve how we select
a more ideal pivot or partition book.

It is a common basic method to assign the first item in an array
as a pivot. This means that you could select a book whose title
starts with a letter roughly the middle of the alphabet (ideal),
or you could wind up with a pivot on either end of the alphabet.

Remember that Quicksort is only at its best-to-average O(n log n)
time complexity when the sublines are divided roughly in half. Otherwise
(if the pivot book starts with 'Z' or 'A'), time complexity increases
to O(n^2).

Rather than looking up established pivot-selection algorithms,
develop your own helper function (idealPivot) with a method for selecting
a pivot/partition book that will split the shelf into roughly equal
sublines. W4D2 Quicksort solution for alphabetizeBookshelf is included
below, but feel free to use your own solution.

*/

var idealPivot = function (books) {
    if (books.length === 0) {
        return books[0];
    }
    let midIndex = Math.floor(books.length / 2) - 1;
    let lastIndex = books.length - 1;
    let firstPivot = books[0];
    let midPivot = books[midIndex];
    let lastPivot = books[lastIndex];
    let pivotArr = [firstPivot, midPivot, lastPivot].sort()

    if (pivotArr[1] === firstPivot) {
        return 0;
    } else if (pivotArr[1] === midPivot) {
        return midIndex;
    } else {
        return lastIndex;
    }
}

// W4D2 solution
var alphabetizeBookshelf = function (books) {
    if (books.length < 2) return books;

    //replace this random pivot assignment with your own helper function (idealPivot)
    // debugger;
    let pivotIndex = idealPivot(books);
    let pivot = books[pivotIndex];

    let lowerBooks = [];
    let higherBooks = [];

    for (let i = 0; i < books.length; i++) {
        if (i === pivotIndex) {
            i++;
        }

        if (books[i] > pivot) {
            higherBooks.push(books[i]);
        } else {
            lowerBooks.push(books[i]);
        }
    }
    return alphabetizeBookshelf(lowerBooks).concat(pivot, alphabetizeBookshelf(higherBooks));
};

let books1 = ['t', 'r', 'y', 'x', 'j', 'l', 's', 'f', 'b'];

console.time('timer');
console.log(alphabetizeBookshelf(books1));
console.timeEnd('timer');