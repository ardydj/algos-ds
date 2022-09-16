
/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
//  root level node
function merge_sort(arr) {
  // Write your code here.
  return [];
}

// abritrary node or leaf node
function mergeHelper(arr, startIndex, endIndex) {
  // base / leaf node
  if  (startIndex === endIndex) {
      return arr;
  }

  // arbitrary worker node
  const midPoint = Math.floor((startIndex + endIndex) / 2);

  // delegate sorting to subordinate worker nodes (child nodes)
  const leftSubArr = mergeHelper(arr, startIndex, midPoint);
  const rightSubArr = mergeHelper(arr, midpoint + 1, endIndex);

  // once sorted, merge both subArrays together;
  const auxArr = [];

  while () {}

  while () {}

  while () {}


}
