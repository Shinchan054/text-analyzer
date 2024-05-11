let getFunction = require('../services/textServices');

test('getNumberOfCharacters should return the number of characters in a sentence', () => {
    const sentence = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getNumberOfCharacters(sentence)).toBe(58);
});