let getFunction = require('../services/textServices');
const fs = require('fs');

test('getNumberOfCharacters should return the number of characters in a sentence', () => {
    const sentence = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getNumberOfCharacters(sentence)).toBe(58);
});

test('getNumberOfCharacters should return the number of characters in a sentence', () => {
    const sentence = 'I walk in the park.\n\n It is healthy.';
    expect(getFunction.getNumberOfCharacters(sentence)).toBe(25);
});

test('getNumberOfCharacters should return the number of characters in a sentence', () => {
    const filePath = 'test/test.txt'
    let sentence = ''

    try {
        sentence = fs.readFileSync(filePath, 'utf-8')
        expect(getFunction.getNumberOfCharacters(sentence)).toBe(912);
    }
    catch (err) {
        console.log(err)
    }
});