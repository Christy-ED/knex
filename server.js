const express = require("express");
const knex = require("knex");
const dotenv = require("dotenv");
const routes = require('./routes/route')

dotenv.config();

const db = knex(require("./knexfile").development);
const app = express();

app.use(express.json());

app.use('api', routes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});