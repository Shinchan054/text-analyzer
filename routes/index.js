const express = require('express');
const router = express.Router();
const getTexts = require('../controllers/dataController');

router.get('/', (req, res) => {
    res.render('index', { title: 'Text Analyzer', text: '' });
}); 

module.exports = router;