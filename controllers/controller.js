const express = require("express");
const router = express.Router();
const knex = require("../knexfile"); 



// Static GET: Retrieve active employees only
router.get("/employees/active", async (req, res) => {
  try {
    const activeEmployees = await knex("employees").where("is_active", true);
    res.json(activeEmployees);
  } catch (error) {
    console.error("Error fetching active employees:", error);
    res.status(500).json({ error: "Failed to fetch active employees" });
  }
});

// Static GET: Retrieve employees by department
router.get("/employees/department/:department", async (req, res) => {
  try {
    const { department } = req.params;
    const employees = await knex("employees").where("department", department);
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees by department:", error);
    res.status(500).json({ error: "Failed to fetch employees by department" });
  }
});

// Static GET: Retrieve employees by manager ID
router.get("/employees/manager/:manager_id", async (req, res) => {
  try {
    const { manager_id } = req.params;
    const employees = await knex("employees").where("manager_id", manager_id);
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees by manager ID:", error);
    res.status(500).json({ error: "Failed to fetch employees by manager ID" });
  }
});


module.exports = controller;
