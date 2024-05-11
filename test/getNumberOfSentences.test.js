let getFunction = require('../services/textServices');

test('getNumberOfSentences should return the number of sentences in a paragraph', () => {
    const sentence = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getNumberOfSentences(paragraph)).toBe(2);
});