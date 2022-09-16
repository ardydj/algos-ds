//  O: Sorted arr of nums
// I: array of nums
// C: {
// length 1 - 4000
// arr[i] = -1,000,000 - 1,000,000
// }

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let previousIndex = i - 1;
    let temp = arr[i];
    while (previousIndex >= 0 && arr[previousIndex] > temp) {
      arr[previousIndex + 1] = arr[previousIndex];
      previousIndex--;
    }
    arr[previousIndex + 1] = temp;
  }

  return arr;
}

// function insertion_sort(arr) {
//     // Write your code here.
//     // base case
//     // if arr.length === 0 or 1; return

//     if (arr.length === 0 || arr.length === 1) {
//         return arr;
//     }

//     // recurrence relations
//     // pre-sorted array from previous recursive call (lazy manager)
//     // current recursive call ONLY cares but last element
//     const lastIndex = arr.length - 1;
//     const subArray = insertion_sort(arr.slice(0, lastIndex - 1));
//     // insert 1 more element (last element of arr), and sort again
//     let temp = arr[lastIndex];
//     subArray.push(temp);
//     // check element at previous index of temp
//     let currentIndex = lastIndex - 1;
//     while (currentIndex >= 0 && subArray[currentIndex] > temp) {
//         // right shifting elements
//         subArray[currentIndex + 1] = subArray[currentIndex];
//         currentIndex--;
//     }
//     // temp is larger than currentEl; insert temp at the next index (currentIndex + 1)
//     subArray[currentIndex + 1] = temp;

//     return subArray;

// }
