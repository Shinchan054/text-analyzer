let getFunction = require('../services/textServices');

test('getNumberOfWords should return the number of words in a sentence', () => {
    const sentence = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getNumberOfWords(sentence)).toBe(16);
});