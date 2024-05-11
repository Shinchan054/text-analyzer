let getFunction = require('../services/textServices');
const fs = require('fs');

test('getLongestWord should return the longest word in a paragraph', () => {
    const sentence = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getLongestWord(sentence)).toBe('quick');
});

test('getLongestWord should return the longest word in a paragraph', () => {
    let filePath = 'test/test.txt'
    let paragraph = ''
    try {
        paragraph = fs.readFileSync(filePath, 'utf-8')
        expect(getFunction.getLongestWord(paragraph)).toBe('skyscrapers');
    }
    catch (err) {
        console.log(err)
    }
});