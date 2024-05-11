const express = require('express');
const router = express.Router();
const dataServices = require('../services/dataServices');
router.get('/', async(req, res) => {
    try {
        let data = await dataServices.getTexts();
        data = data.map((item) => {
            return {
                id: item.Id,
                text: item.Text
            }
        });
        console.log(data);
        res.render('index', { title: 'Text Analyzer', data: data });
    } catch (error) {
        console.log('aschiii')
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;