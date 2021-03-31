// With an input string that represents a list of words without spaces, return that same string with spaces between each word

// O: string with spaces between each word
// I: string with words without spaces
// C:
// E: Must be able to handle cases were a word is longer, but also not take a char from another word

// e.g "Ilovedancing" -> "I love dancing" and not "I loved ancing"
// e.g "Iloverunning" -> "I love running" and not "I love run ning"

let isWord = (word) => {
  let wordLibrary = {
    i: 'i',
    love: 'love',
    loved: 'loved',
    dancing: 'dancing',
    running: 'running',
    run: 'run'
  };

  return !!wordLibrary[word]
}

console.log(isWord('dancing'));