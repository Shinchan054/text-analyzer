let getFunction = require('../services/textServices');
const fs = require('fs');

test('getNumberOfSentences should return the number of sentences in a paragraph', () => {
    const paragraph = 'The quick brown fox jumps over the lazy dog.';
    expect(getFunction.getNumberOfSentences(paragraph)).toBe(1);
});

test('getNumberOfSentences should return the number of sentences in a paragraph', () => {
    const paragraph = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun. How sweet the environment is!';
    expect(getFunction.getNumberOfSentences(paragraph)).toBe(3);
});

test('getNumberOfSentences should return the number of sentences in a paragraph', () => {
    const filePath = 'test/test.txt'
    let paragraph = ''

    try {
        paragraph = fs.readFileSync(filePath, 'utf-8')
        expect(getFunction.getNumberOfSentences(paragraph)).toBe(10);
    }
    catch (err) {
        console.log(err)
    }
});

