const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get("/:table", controller.activeEmployees);
router.get("/:table", controller.departmen);
router.get("/:table", controller.manager_id);

module.exports = router;