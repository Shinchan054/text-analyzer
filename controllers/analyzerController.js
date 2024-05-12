const express = require('express');
const router = express.Router();
const textServices = require('../services/textServices');

function getWordCount(req, res) {
    const text = req.body.text;
    const wordCount = textServices.getNumberOfWords(text);
    res.json({ wordCount });
}

function getCharCount(req, res) {
    const text = req.body.text;
    const charCount = textServices.getNumberOfCharacters(text);
    res.json({ charCount });
}

function getSentenceCount(req, res) {
    const text = req.body.text;
    const sentenceCount = textServices.getNumberOfSentences(text);
    res.json({ sentenceCount });
}

function getparagraphcount(req, res) {
    const text = req.body.text;
    const paragraphCount = textServices.getNumberOfParagraphs(text);
    res.json({ paragraphCount });
}

function getLongestWord(req, res) {
    const text = req.body.text;
    const longestWord = textServices.getLongestWord(text);
    res.json({ longestWord });
}

module.exports = {
    getWordCount,
    getCharCount,
    getSentenceCount,
    getparagraphcount,
    getLongestWord
};

