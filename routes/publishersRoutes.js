const express = require('express');
const router = express.Router();
const publishersController = require('../controllers/publishersController')

router.get('/',publishersController.getPublishers);
router.get('/:id',publishersController.getPublishers);

module.exports = router;
