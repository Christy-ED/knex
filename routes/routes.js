const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/:table', controller)
router.get('/:table/')

module.exports = router;