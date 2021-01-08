/*

O(n) solution below. Explanatory article on this approach: http://tiny.cc/fl16tz

Other walkthrough to review: https://www.youtube.com/watch?v=7RTYCL-h_NY

*/

var productExceptSelf = function(nums) {
    debugger;
    let productArray = [];
    let left = 1;
    let right = 1;
    for (let i = 0; i < nums.length; i++) {
        productArray[i] = left;
        left = left * nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        debugger;
        productArray[i] = right * productArray[i];
        right = right * nums[i];
    }
    return productArray;
};

(productExceptSelf([1, 2, 3, 4]));
(productExceptSelf([2, 0, 13]));