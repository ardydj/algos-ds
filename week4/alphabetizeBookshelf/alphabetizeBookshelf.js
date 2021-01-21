/*
WEEK 4, DAYS 1 and 2
alphabetizeBookshelf.js

---
PROMPT
---
Code an algorithm for alphabetizing a bookshelf, as found in this video:
https://www.youtube.com/watch?v=WaNLJf8xzC4.

This prompt provides an opportunity to start with a less efficient algo (like Bubble sort)
and then improve complexity by using a more appropriate algo, like Quicksort.

Interviewers want to know that you understand how these algos work, and that you understand from a logical
level why one algo is an improvement over another. Even if you code only the optimal algorithm,
it is an excellent idea to at least talk through the less efficient solution first. This
allows the interviewer to know how you think and reason, not just that you have memorized the solution.

This is a two-day prompt, to allow you time to review DS&A Level-Up resources and build the
solution using at least two different algos.

*/

// WEEK 4, DAY 1
var alphabetizeBookshelf1 = function(books) {
    let isUnsorted = false;

    for (let i = 0; i < books.length; i++) {
      let currentElement = books[i];
      let nextElement = books[i + 1];
      if (currentElement > nextElement) {
        isUnsorted = true;
        books[i] = nextElement;
        books[i + 1] = currentElement;
      }
    }

    if (isUnsorted) {
      alphabetizeBookshelf1(books);
    }

    return books;
};


// WEEK 4, DAY 2
var insertionSort = function(half) {
  if (half.length > 2) {
    lastIndex = half.length - 1;
    let halfSlice = insertionSort(half.slice(0, lastIndex));
    halfSlice.push(half[lastIndex]);
    insertedElIndex = lastIndex;

    for (let i = lastIndex - 1; i >= 0; i--) {
      // You need to keep track of inserted element not simply last element
      let insertedEl = halfSlice[insertedElIndex];
      let currentElement = halfSlice[i];

      if (currentElement > insertedEl) {
        halfSlice[i] = insertedEl;
        halfSlice[insertedElIndex] = currentElement;
        insertedElIndex = i;
      }
    }
    return halfSlice;
  }

  if (half.length <= 2) {
    let [firstEl, secondEl] = half;
    if (firstEl > secondEl) {
      half[0] = secondEl;
      half[1] = firstEl;
    }
    return half;
  }
}

var alphabetizeBookshelf2 = function(books) {
  // create split point
  let splitPointIndex = Math.floor(Math.random() * (books.length - 1) + 1);
  // create both halfs
  let firstHalf = [];
  let secondHalf = [];
  debugger;
  // assign each book to a bucket
  for (let i = 0; i < books.length; i++) {
    i === splitPointIndex ? i++ : i;
    let currentBook = books[i];
    if (currentBook < books[splitPointIndex]) {
      firstHalf.push(currentBook);
    } else {
      secondHalf.push(currentBook);
    }
  }
  debugger;
  if (firstHalf.length > 3) {
    alphabetizeBookshelf2(firstHalf);
    firstHalf = insertionSort(firstHalf);
    debugger;
  } else {
    firstHalf = insertionSort(firstHalf);
  }

  if (secondHalf.length > 3) {
    alphabetizeBookshelf2(secondHalf);
    insertionSort(secondHalf);
  } else {
    insertionSort(secondHalf);
  }

  firstHalf.concat(secondHalf).splice(splitPointIndex, 0, books[splitPointIndex]);
  debugger;
  return firstHalf;

};

let testBookShelf1 = ['e', 'r', 't', 'e', 'd', 'b', 'x', 'a', 'h', 'n', 's', 'w', 'z', 'x', 'i', 'o', 'u', 'g'];

console.log(alphabetizeBookshelf2(testBookShelf1));