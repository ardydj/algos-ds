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
  let insertElIndex = half.length - 1;
    for (let i = insertElIndex; i >= 0; i--) {
      let currentElement = half[insertElIndex];
      let prevElement = half[insertElIndex - 1];

      if (prevElement > currentElement) {
        half[] = currentElement;
      }
    }
  }
}

var alphabetizeBookshelf2 = function(books) {
  // create split point
  let splitPointIndex = Math.floor(Math.random() * books.length);
  // create both halfs
  let firstHalf = [];
  let secondHalf = [];

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

  if (firstHalf.length > 3) {
    alphabetizeBookshelf2(firstHalf);
  } else {
    insertionSort(firstHalf);
  }

  if (secondHalf.length > 3) {
    alphabetizeBookshelf2(secondHalf);
  } else {

  }

  return firstHalf.concat(secondHalf).splice(splitPointIndex, 0, books[splitPointIndex]);

};

let testBookShelf1 = ['e', 'r', 't', 'e', 'd', 'b', 'x', 'a', 'h', 'n', 's', 'w', 'z', 'x', 'i', 'o', 'u', 'g'];

console.log(alphabetizeBookshelf1(testBookShelf1));