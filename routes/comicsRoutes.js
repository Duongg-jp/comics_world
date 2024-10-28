const express = require('express');
const router = express.Router();
const comicsController = require('../controllers/comicsController')

router.get('/',comicsController.getComics);
router.get('/:id',comicsController.getComics);
router.post('/',comicsController.addComics);

module.exports = router;
