const express = require("express");
const knex = require("knex");
const dotenv = require("dotenv");
const routes = require('./routes/route')

dotenv.config();

const db = knex(require("./knexfile").development);
const app = express();
app.use(express.json());

// Dynamic GET Route
app.get("/data", async (req, res) => {
  try {
    const fields = req.query.fields ? req.query.fields.split(",") : "*";
    const data = await db("employees").select(fields);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving data" });
  }
});

// Static GET Route: Retrieve Active Employees
app.get("/active-employees", async (req, res) => {
  try {
    const data = await db("employees").where({ is_active: true });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving active employees" });
  }
});

// Static GET Route: Retrieve Employees by Department
app.get("/department/:dept", async (req, res) => {
  try {
    const { dept } = req.params;
    const data = await db("employees").where({ department: dept });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving employees by department" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});