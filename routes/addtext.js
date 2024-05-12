const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.get('/', (req, res) => {
    res.render('addtext');
})

router.post('/new', dataController.addText);
module.exports = router;