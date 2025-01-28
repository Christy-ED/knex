const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

// Use the controller methods for each route
router.get("/employees/active", controller.getActiveEmployees);
router.get("/employees/department/:department",controller.getEmployeesByDepartment);
router.get("/employees/manager/:manager_id", controller.getEmployeesByManager);
module.exports = router;
