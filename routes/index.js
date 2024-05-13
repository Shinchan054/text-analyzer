const express = require('express');
const router = express.Router();
const getTexts = require('../controllers/dataController');
const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

router.get('/', rateLimiter, (req, res) => {
    res.render('index', { title: 'Text Analyzer', text: '' });
}); 

module.exports = router;