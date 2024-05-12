const express = require('express');
const router = express.Router();
const analyzerController = require('../../controllers/analyzerController');

router.post('/getwordcount', analyzerController.getWordCount);

router.post('/getcharactercount', analyzerController.getCharCount);

router.post('/getsentencecount', analyzerController.getSentenceCount);

router.post('/getparagraphcount', analyzerController.getparagraphcount);

router.post('/getlongestword', analyzerController.getLongestWord);

module.exports = router;