const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/', dataController.updateText);
router.get('/:id', dataController.getTextById);

module.exports = router;