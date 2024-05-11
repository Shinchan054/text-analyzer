let getFunction = require('../services/textServices');

test('getNumberOfParagraphs should return the number of paragraphs in a text', () => {
    const text = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.\n\nThe quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getNumberOfParagraphs(text)).toBe(2);
});