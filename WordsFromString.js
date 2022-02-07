/*
Input:
s = “applepenapple”
words = [“apple”, “pen”];
Output: True
Explanation:
The string “applepenapple” can be broken into “apple pen apple”
Input:
s = “catsandog”
words = [“cats”, “dog”, “sand”, “and”, “cat”]
Output: False
*/

function WordsFromString(wordsArr, string) {

  // base case
  if (wordsArr.length === 0) {
    return true;
  }

  let isWord = true;
  const wordChars = wordsArr[0].split('');
  const stringChars = string.split('');

  wordChars.forEach((char, index) => {

    if (!isWord) {
      return false;
    }

    return isWord = char === stringChars[index];
  });

  return !isWord ? isWord : WordsFromString(wordsArr.slice(1), stringChars.slice(wordChars.length).join(''));
}

console.log(WordsFromString(['apple', 'pen'], 'applepenapple'));
console.log(WordsFromString(['cats', 'dog', 'sand', 'and', 'cat'], 'catsandog'));
console.log(WordsFromString(['cats', 'dog', 'sand', 'and', 'cat'], 'catsdogsandandcat'));