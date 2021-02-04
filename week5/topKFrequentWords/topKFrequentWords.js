/*
WEEK 5, DAY 4
topKFrequentWords.js

---
PROMPT
---

Given a non-empty list of words, return the k most frequent elements. Your answer should
be sorted by frequency from highest to lowest. If two words have the same frequency,
then the word with the lower alphabetical order comes first.

Try to solve it in O(n log k) time and O(n) extra space.

Lyrics to "Bohemian Rhapsody" included below as an array for testing.

---
EXAMPLES
---

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.


Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

---
CONSTRAINTS
---

  1) You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
  2) Input words contain only lowercase letters.

*/

var filterMostFrequent = function (words) {
  let mostFrequentWords = [];
  let currentEl = words[0];
  let currentElArray = [currentEl];
  let remainingWords = words.slice(1);

  if (words.length <= 1) {
    return words;
  }

  if (words.length > 1) {
    remainingWords.forEach((word, i) => {
      if (word === currentEl) {
        currentElArray.push(word);
        remainingWords.splice(i, 1);
      }
    })
  }

  mostFrequentWords.push(currentElArray, filterMostFrequent(remainingWords));
  return mostFrequentWords;
}

console.log(JSON.stringify(filterMostFrequent(["i", "love", "love", "leetcode", "i", "love", "coding"])))

var topKFrequent = function(words, k) {
  let mostFrequent = [];

  return mostFrequent;
};

const bohemianRhapsody = ["is", "this", "the", "real", "life", "is", "this", "just", "fantasy", "caught", "in ", "a", "landslide", "no", "escape", "from", "reality", "open", "your", "eyes", "look", "up", "to", "the", "skies", "and", "see", "i`m", "just", "a", "poor", "boy,", "i", "need", "no", "sympathy", "because", "i`m", "easy", "come", "easy", "go", "a", "little", "high, ", "little", "low", "anyway", "the", "wind", "blows, ", "doesn`t", "really", "matter", "to", "me,", "to", "me", "mama, ", "just", "killed", "a", "man", "put", "a", "gun", "against", "his", "head", "pulled", "my", "trigger", "now", "he`s", "dead", "mama, ", "life", "had", "just", "begun", "but", "now", "i`ve", "gone", "and", "thrown", "it", "all", "away", "mama, ", "ooo", "didn`t", "mean", "to", "make", "you", "cry", "if", "i`m", "not", "back", "again", "this", "time", "tomorrow", "carry", "on, ", "carry", "on", "as", "if", "nothing", "really", "matters", "too", "late, ", "my", "time", "has", "come", "sends", "shivers", "down", "my", "spine", "body`s", "aching", "all", "the", "time", "goodbye", "everybody", "i`ve", "got", "to", "go", "gotta", "leave", "you", "all", "behind", "and", "face", "the", "truth", "mama, ", "ooo", "anyway", "the", "wind", "blows)", "i", "don`t", "want", "to", "die", "i", "sometimes", "wish", "i`d", "never", "been", "born", "at", "all", "i", "see", "a", "little", "silhouetto", "of", "a", "man", "scaramouch, ", "scaramouch", "will", "you", "do ", "the", "fandango", "thunderbolt", "and", "lightning", "very", "very", "frightening", "me", "gallileo, ", "gallileo,", "gallileo, ", "gallileo,", "gallileo", "figaro", "magnifico", "but", "i`m", "just", "a", "poor", "boy", "and", "nobody", "loves", "me", "he`s", "just", "a", "poor", "boy", "from", "a", "poor", "family", "spare", "him", "his", "life", "from", "this", "monstrosity", "easy", "come", "easy", "go", "will", "you", "let", "me", "go", "bismillah", "no", "we", "will", "not", "let", "you", "go", "let", "him", "go", "bismillah", "we", "will", "not", "let", "you", "go", "let", "him", "go", "bismillah", "we", "will", "not", "let", "you", "go", "let", "me", "go", "will", "not", "let", "you", "go", "let", "me", "go", "(never)", "never", "let", "you", "go", "let", "me", "go", "never", "let", "me", "go", "no", "no", "no", "no", "no", "no", "no", "oh", "mama", "mia", "mama", "mia", "mama", "mia", "let", "me", "go", "beelzebub", "has", "a", "devil", "put", "aside", "for", "me", "for", "me", "for", "me", "so", "you", "think", "you", "can", "stone", "me", "and", "spit", "in ", "my", "eye", "so", "you", "think", "you", "can", "love", "me", "and", "leave", "me", "to", "die", "oh", "baby", "can`t", "do", "this", "to", "me", "baby", "just", "gotta", "get", "out", "just", "gotta", "get", "right", "outta", "here", "ooh", "yeah, ", "ooh", "yeah", "nothing", "really", "matters", "anyone", "can", "see", "nothing", "really", "matters", "nothing", "really", "matters", "to", "me", "anyway", "the", "wind", "blows"];



