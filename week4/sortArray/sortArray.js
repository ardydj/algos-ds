/*
WEEK 4, DAY 4
sortArray.js

---
PROMPT
---

Given a large array of integers `nums`, sort the array in ascending order.

Quicksort vs Merge Sort discussion:
https://stackoverflow.com/questions/29218440/when-merge-sort-is-preferred-over-quick-sort


---
EXAMPLE
---

Input: [
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
]

Output: [
    7, 9, 38, 48, 55, 62, 68, 76, 88, 146, 152, 157, 158, 193, 203, 217, 294, 339, 340, 360, 363, 374,
    381, 404, 479, 495, 505, 507, 510, 512, 532, 541, 567, 579, 581, 586, 609, 620, 623, 641, 658, 659,
    712, 754, 793, 797, 807, 816, 852, 854, 876, 880, 918, 922, 938, 945, 946, 956, 959, 961, 979, 992,
    1004, 1013, 1034, 1038, 1042, 1045, 1047, 1070, 1088, 1096, 1131, 1143, 1145, 1165, 1197, 1210, 1221,
    1227, 1228, 1239, 1244, 1250, 1271, 1274, 1278, 1288, 1296, 1327, 1329, 1333, 1347, 1370, 1383, 1392,
    1393, 1401, 1405, 1414, 1416, 1442, 1465, 1492, 1496, 1501, 1530, 1536, 1558, 1561, 1580, 1583, 1587,
    1594, 1609, 1615, 1662, 1670, 1676, 1680, 1681, 1686, 1715, 1777, 1802, 1820, 1844, 1869, 1875, 1898,
    1992, 2007, 2017, 2024, 2070, 2071, 2090, 2093, 2102, 2113, 2126, 2127, 2131, 2146, 2150, 2183, 2196,
    2200, 2205, 2210, 2219, 2222, 2234, 2237, 2255, 2259, 2273, 2287, 2301, 2307, 2344, 2373, 2418, 2425,
    2430, 2437, 2440, 2471, 2480, 2513, 2518, 2525, 2528, 2544, 2548, 2557, 2560, 2588, 2599, 2608, 2627,
    2683, 2687, 2710, 2752, 2758, 2784, 2789, 2812, 2815, 2821, 2823, 2829, 2842, 2931, 2957, 2962, 2969,
    2978, 2995
]

---
CONSTRAINTS
---

    1) 1 <= nums.length <= 50000
    2) -50000 <= nums[i] <= 50000
*/

var sortCurrentArray = function (array) {
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let nextElement = array[i + 1];
        if (currentElement > nextElement) {
            array[i] = nextElement;
            array[i + 1] = currentElement;
            sortCurrentArray(array);
        }
    }
    return array;
}

var sortBothArrays = function (arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] > arr2[j]) {
                arr1.splice(i, 0, arr2[j]);
                arr2.splice(j, 1);
                j = 0;
            }
        }
    }
    if (arr1.length !== (arr1.length + arr2.length)) {
        return arr1.concat(arr2);
    }

    return arr1;
}

var sortArray = function (nums) {
    var firstHalf;
    var secondHalf;
    var mergedArr;

    // if current array length is greater than 1
    if (nums.length > 1) {
        // get mid point
        isOddLength = nums.length % 2 === 1 ? true : false;
        let midpointIndex = isOddLength ? Math.floor(nums.length / 2) - 1 : nums.length / 2 - 1;
        firstHalf = nums.slice(0, midpointIndex + 1)
        // let secondHalf = isOddLength ? nums.slice(midpointIndex + 2) : nums.slice(midpointIndex + 1);
        secondHalf = nums.slice(midpointIndex + 1);

        // recursively split arrays
        sortArray(firstHalf);
        sortArray(secondHalf);

        // sort each array before merging
        sortCurrentArray(firstHalf);
        sortCurrentArray(secondHalf);

        // merge and sort both arrays
        mergedArr = sortBothArrays(firstHalf, secondHalf);

    }
        // pass 1st half and 2nd half into sortArray function recursively
        // iterate over 1st half and compare to elements in second array
            // if second half element is less than current 1st half element
                // remove from 2nd half and place infront of current 1st half element

    // if current array length is 1
    if (nums.length === 1) {
        return nums;
    }

    return mergedArr;
};


let testInput1 = [34, 55, 22, 2, 5, 16, 105, 79, 12];

console.log(sortArray(testInput1));

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