function getNumberOfWords(text) {
    return text.split(/\s+/).length;
}

function getNumberOfCharacters(text) {
    let regex = /[a-zA-Z]/g;
    return text.match(regex).length;
}

function getNumberOfSentences(text) {
    return text.split(/[.!?]/g).length - 1;
}

function getNumberOfParagraphs(text) {
    return text.split(/\n+/).length;
}

function getLongestWord(text) {
    let words = text.toLowerCase().split(/\s+/);
    let longestWord = '';
    let maxLength = 0;

    for(let word of words) {
        if(word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    }

    return longestWord;
}

module.exports = {
    getNumberOfWords,
    getNumberOfCharacters,
    getNumberOfSentences,
    getNumberOfParagraphs,
    getLongestWord
};