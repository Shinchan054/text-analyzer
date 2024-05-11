let getFunction = require('../services/textServices');
const fs = require('fs');

test('getNumberOfWords should return the number of words in a sentence', () => {
    const sentence = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getNumberOfWords(sentence)).toBe(16);
});

test('getNumberOfWords should return the number of words in a sentence', () => {
    const sentence = 'I walk in the park.\n\n It is healthy.';
    expect(getFunction.getNumberOfWords(sentence)).toBe(8)
});

test('getNumberOfWords should return the number of words in a sentence', () => {
    const filePath = 'test/test.txt'
    let sentence = ''

    try {
        sentence = fs.readFileSync(filePath, 'utf-8')
    }
    catch (err) {
        console.log(err)
    }
    expect(getFunction.getNumberOfWords(sentence)).toBe(174);
});