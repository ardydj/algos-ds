/*

There are several approaches to this problem. Below are two solutions: heap and hash.

Excellent discussion of approaches to this problem:
https://stackoverflow.com/questions/185697/the-most-efficient-way-to-find-top-k-frequent-words-in-a-big-word-sequence

*/


// A HEAP SOLUTION
class Heap {
    constructor(compareFunc) {
        this.compareFunc = compareFunc;
        this.heap = new Array();
    }

    insert(val) {
        this.heap.push(val);
        this.heap.sort(this.compareFunc);
    }

    extract() {
        return this.heap.shift();
    }

    peek() {
        return this.heap[0];
    }

    get size() {
        return this.heap.length;
    }
}

const compareFunc = (a, b) => {
    if (a[1] === b[1]) {
        if (a[0] === b[0]) return 0;
        if (a[0] < b[0]) return 1;
        return -1;
    }

    return a[1] - b[1];
};

const getFrequencies = (words) => {
    const freq = new Map();
    words.forEach(word => {
        if(!freq.has(word)) freq.set(word, 0);
        freq.set(word, freq.get(word) + 1);
    });

    return freq;
};

const topKFrequent = (words, k) => {
    if (!words || words.length === 0) return [];

    const freq = getFrequencies(words);
    const minHeap = new Heap(compareFunc);

    for (const word of freq.keys()) {
        const tuple = [word, freq.get(word)];
        minHeap.insert(tuple);
        if (minHeap.size > k) minHeap.extract();
    }

    const ans = new Array();
    while (minHeap.size > 0) ans.unshift(minHeap.extract()[0]);

    return ans;
};

// A HASH SOLUTION
var topKFrequentHash = function (words, k) {
    debugger;
    let hash = {};
    for (let word of words) {
        hash[word] = hash[word] + 1 || 1;
    }
    let result = Object.keys(hash).sort((a, b) => {
        let countCompare = hash[b] - hash[a];
        if (countCompare == 0) return a.localeCompare(b);
        else return countCompare;
    }
    );
    return result.slice(0, k);
};

const bohemianRhapsody = ["is", "this", "the", "real", "life", "is", "this", "just", "fantasy", "caught", "in ", "a", "landslide", "no", "escape", "from", "reality", "open", "your", "eyes", "look", "up", "to", "the", "skies", "and", "see", "i`m", "just", "a", "poor", "boy,", "i", "need", "no", "sympathy", "because", "i`m", "easy", "come", "easy", "go", "a", "little", "high, ", "little", "low", "anyway", "the", "wind", "blows, ", "doesn`t", "really", "matter", "to", "me,", "to", "me", "mama, ", "just", "killed", "a", "man", "put", "a", "gun", "against", "his", "head", "pulled", "my", "trigger", "now", "he`s", "dead", "mama, ", "life", "had", "just", "begun", "but", "now", "i`ve", "gone", "and", "thrown", "it", "all", "away", "mama, ", "ooo", "didn`t", "mean", "to", "make", "you", "cry", "if", "i`m", "not", "back", "again", "this", "time", "tomorrow", "carry", "on, ", "carry", "on", "as", "if", "nothing", "really", "matters", "too", "late, ", "my", "time", "has", "come", "sends", "shivers", "down", "my", "spine", "body`s", "aching", "all", "the", "time", "goodbye", "everybody", "i`ve", "got", "to", "go", "gotta", "leave", "you", "all", "behind", "and", "face", "the", "truth", "mama, ", "ooo", "anyway", "the", "wind", "blows)", "i", "don`t", "want", "to", "die", "i", "sometimes", "wish", "i`d", "never", "been", "born", "at", "all", "i", "see", "a", "little", "silhouetto", "of", "a", "man", "scaramouch, ", "scaramouch", "will", "you", "do ", "the", "fandango", "thunderbolt", "and", "lightning", "very", "very", "frightening", "me", "gallileo, ", "gallileo,", "gallileo, ", "gallileo,", "gallileo", "figaro", "magnifico", "but", "i`m", "just", "a", "poor", "boy", "and", "nobody", "loves", "me", "he`s", "just", "a", "poor", "boy", "from", "a", "poor", "family", "spare", "him", "his", "life", "from", "this", "monstrosity", "easy", "come", "easy", "go", "will", "you", "let", "me", "go", "bismillah", "no", "we", "will", "not", "let", "you", "go", "let", "him", "go", "bismillah", "we", "will", "not", "let", "you", "go", "let", "him", "go", "bismillah", "we", "will", "not", "let", "you", "go", "let", "me", "go", "will", "not", "let", "you", "go", "let", "me", "go", "(never)", "never", "let", "you", "go", "let", "me", "go", "never", "let", "me", "go", "no", "no", "no", "no", "no", "no", "no", "oh", "mama", "mia", "mama", "mia", "mama", "mia", "let", "me", "go", "beelzebub", "has", "a", "devil", "put", "aside", "for", "me", "for", "me", "for", "me", "so", "you", "think", "you", "can", "stone", "me", "and", "spit", "in ", "my", "eye", "so", "you", "think", "you", "can", "love", "me", "and", "leave", "me", "to", "die", "oh", "baby", "can`t", "do", "this", "to", "me", "baby", "just", "gotta", "get", "out", "just", "gotta", "get", "right", "outta", "here", "ooh", "yeah, ", "ooh", "yeah", "nothing", "really", "matters", "anyone", "can", "see", "nothing", "really", "matters", "nothing", "really", "matters", "to", "me", "anyway", "the", "wind", "blows"];

console.log(topKFrequentHash(bohemianRhapsody, 3));