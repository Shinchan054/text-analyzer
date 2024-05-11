function getNumberOfWords(text) {
    return text.split(/\s+/).length;
}

function getNumberOfCharacters(text) {
    return 0;
}

function getNumberOfSentences(text) {
    return 0;
}

function getNumberOfParagraphs(text) {
    return 0;
}

function getLongestWord(text) {
    return '';
}

module.exports = {
    getNumberOfWords,
    getNumberOfCharacters,
    getNumberOfSentences,
    getNumberOfParagraphs,
    getLongestWord
};