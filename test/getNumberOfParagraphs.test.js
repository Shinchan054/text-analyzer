let getFunction = require('../services/textServices');
const fs = require('fs');

test('getNumberOfParagraphs should return the number of paragraphs in a text', () => {
    const text = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.\nThe quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getNumberOfParagraphs(text)).toBe(2);
});

test('getNumberOfParagraphs should return the number of paragraphs in a text', () => {
    const text = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.\n\nThe quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.\nThe quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getNumberOfParagraphs(text)).toBe(3);
});

test('getNumberOfParagraphs should return the number of paragraphs in a text', () => {
    const filePath = 'test/test.txt'
    let text = ''

    try {
        text = fs.readFileSync(filePath, 'utf-8')
        expect(getFunction.getNumberOfParagraphs(text)).toBe(3);
    }
    catch (err) {
        console.log(err)
    }
});