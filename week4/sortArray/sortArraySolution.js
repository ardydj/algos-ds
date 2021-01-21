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
    debugger;
    if (nums.length < 2) return nums;

    let midpoint = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, midpoint));
    let right = sortArray(nums.slice(midpoint));

    return merge(left, right);

};

testInput2 = [
    1662, 1393, 922, 1274, 2823, 2588, 1715, 1401, 2784, 1227, 1278, 2234, 340,
    1004, 203, 2418, 946, 2560, 1496, 2126, 512, 2237, 146, 961, 2758, 479, 1820, 2222, 641,
    2307, 2548, 797, 2440, 2430, 2710, 918, 1992, 510, 1210, 1327, 2196, 495, 1038, 880, 1250,
    157, 1492, 2525, 623, 404, 1296, 2301, 2931, 2789, 1239, 76, 1042, 2017, 579, 1047, 659,
    48, 532, 1197, 1013, 2821, 68, 1416, 1405, 2544, 2071, 1615, 2090, 620, 374, 2471, 1875,
    2599, 2627, 956, 2513, 2957, 7, 2425, 1333, 2007, 581, 1288, 1271, 2210, 1536, 816, 505,
    793, 1383, 854, 55, 1414, 1777, 193, 1844, 2687, 1088, 2962, 88, 2200, 2978, 567, 1329,
    2183, 2815, 2683, 1676, 2752, 992, 2127, 1580, 959, 876, 363, 1228, 2131, 2273, 938, 1558,
    2255, 2070, 1165, 152, 2812, 2995, 541, 2557, 2842, 712, 1096, 1609, 2829, 1802, 1145, 2259,
    381, 2287, 1347, 1561, 507, 339, 2373, 2146, 2205, 9, 1686, 2093, 2024, 217, 1530, 807, 158,
    1587, 754, 294, 1392, 979, 852, 1244, 1583, 2219, 1143, 2518, 1681, 62, 1501, 1594, 1670, 360,
    945, 1070, 2344, 2113, 2969, 586, 2437, 2150, 1442, 609, 1034, 1131, 658, 1370, 1221, 1869,
    1045, 1680, 1898, 2480, 2102, 1465, 2608, 38, 2528
];

console.log(sortArray(testInput2));