const express = require('express');
const router = express.Router();
const analyzerController = require('../../controllers/analyzerController');
const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});


router.post('/getwordcount', rateLimiter, analyzerController.getWordCount);

router.post('/getcharactercount', rateLimiter, analyzerController.getCharCount);

router.post('/getsentencecount', rateLimiter, analyzerController.getSentenceCount);

router.post('/getparagraphcount', rateLimiter, analyzerController.getparagraphcount);

router.post('/getlongestword', rateLimiter, analyzerController.getLongestWord);

module.exports = router;