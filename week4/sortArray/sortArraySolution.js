/*

Merge Sort is a common algo for sorting a list of integers. With a
time complexity of O(n log(n)) in all cases, it can provide faster
processing than Quicksort (whose worst case time complexity -- 
for example, when a pivot deviates greatly from the midpoint -- is O(n^2)).

Worst-case space complexity is greater with Merge Sort (O(n)) than
Quicksort (O(log(n))).

In an interview setting, discuss the time and space complexity tradeoffs
when you select one algo over another to solve a prompt.

The solution below is recursive implementation of Merge Sort.
Iterative and recursive walkthroughs:
https://medium.com/swlh/merge-sort-algorithm-101-c4fdea276289

*/


function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(...left, ...right);
}

var sortArray = function (nums) {

    if (nums.length < 2) return nums;

    let midpoint = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, midpoint));
    let right = sortArray(nums.slice(midpoint));

    return merge(left, right);

};
