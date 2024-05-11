const express = require('express');
const router = express.Router();
const func = require('../services/textServices');
router.get('/', (req, res) => {
    const num = func.getNumberOfWords("The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.");
    res.render('index', { title: 'Express with EJS', num: num });
});

module.exports = router;