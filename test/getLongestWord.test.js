let getFunction = require('../services/textServices');

test('getLongestWord should return the longest word in a paragraph', () => {
    const sentence = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(getFunction.getLongestWord(sentence)).toBe('jumps');
});