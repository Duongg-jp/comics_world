const express = require('express');
const router = express.Router();
const publishersController = require('../controllers/publishersController')

router.get('/',publishersController.getAllPublisher);

module.exports = router;
