var lengthOfLongestSubstring = function (s) {
  let subStringNonRepeated = '';
  //    base case
  if (s.length === 1 || s.length === 0) {
    return s.length;
  }

  //     recurrence relations
  //     concatenate the substring with current char if doesn't already include char
  let index = 0;
  while (!subStringNonRepeated.includes(s[index]) && index < s.length) {
    subStringNonRepeated += s[index];
    index++;
  }

  const subStringLength = lengthOfLongestSubstring(s.substring(index));

  return subStringNonRepeated.length > subStringLength
    ? subStringNonRepeated.length
    : subStringLength;
  //     otherwise call function recursively with current char as the beginning of the substring
  //     final return will previous length compared to current length
  //     return larger length
};
