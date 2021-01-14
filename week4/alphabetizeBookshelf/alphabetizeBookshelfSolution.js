/*

There are several approaches to the task of alphabetizing a bookshelf.
In an interview setting, it is important to be able to explain
how different approaches work before coding an optimal solution.

Here's an example interview answer:

--

BUBBLE SORT is one brute-force approach, but it is slow and inefficient.
In a group of 1280 books, we compare and swap every pair of books down the line
until the lowest book (likely starting with Z) "bubbles" down to the end.
We go through the books again from the first book, comparing and swapping
each pair down the line. During this pass through the shelf, the second-to-last
book will land in the second-to-last position on the shelf, and we continue
until the shelf is alphabetized.

1279 comparisons + 1278 + 1277 + ... + 1 = 818,560 total comparisons
At one comparison/second, alphabetizing takes ~9.5 days.


INSERTION SORT is an improved approach, because we sort a small subline of
two books, then insert a third book to sort within this alphabetized subline,
and continue until we insert the final book into the subline of all other
books. On average, this approach compares each book to about half of
the books that came before it.

(1+2+3+...+1279)/2 = 409,280 comparisons = ~5 days


We really need a divide-and-conquer approach to reduce time complexity.
QUICKSORT is an ideal approach for sorting through a large data set like this.
To do this, we create a partition book, or pivot. Ideally, this pivot divides the books
into two roughly equal sublines, because Quicksort's complexity increases
with an unbalanced data set. Compare this pivot/partition book to every
other book on the shelf, putting all books that come before the partition to the left,
and all books that come after to the right. Creating additional sub-partitions
generates small sublines of books whose general alphabetical relationship to
the other books is now determined without additonal comparison.

Now, use a simple but less efficient sorting method to alphabetize each small subline.

Each round of partitioning requires about 1280 comparison. With fairly balanced
partitions (meaning that our pivot/partition book falls roughly in the middle
of the alphabet), we sub-partition into 128 sublines of 10 books each in
~seven rounds:

128 x 10 x 7 = 8960 seconds
At this point, we now have 128 small datasets to sort. Using Insertion Sort
on those small sets takes ~22 seconds/subline.

8960 + (128 x 22) = 11776 = 3.3 hours

*/


/* This is a algorithm-centric question, and so this example solution does not include consideration of
duplicate titles, articles like 'the' and 'a' at the start of the title, etc. In an interview
setting you should at least mention common scenarios, edge cases and outliers, even if they do
not ask you to code for those. */


var alphabetizeBookshelf = function (books) {
    if (books.length < 2) return books;

    // Using the first item as random partition is a common approach.
    // What if this first book begins with 'Z' or 'A'? See W4D3 toy problem.
    let pivot = books[0];
    let lowerBooks = [];
    let higherBooks = [];

    for (let i = 1; i < books.length; i++) {
        if (books[i] > pivot) {
            higherBooks.push(books[i]);
        } else {
            lowerBooks.push(books[i]);
        }
    }
    // Bring the sublines and pivot together to return the alphabetized array
    return alphabetizeBookshelf(lowerBooks).concat(pivot, alphabetizeBookshelf(higherBooks));
};

console.log(
    alphabetizeBookshelf([
        'Brave New World',
        'Parable of the Sower',
        '1Q84',
        'Tehanu',
        'Hyperion',
        'Falling Free',
        'Ready Player One',
        'Neuromancer'
    ])
);
