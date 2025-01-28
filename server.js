const express = require("express");
const dotenv = require("dotenv");
const routes = require('./routes/routes')

const bodyParser = require("body-parser");  
const cors = require("cors");

dotenv.config();


const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(cors())

// Use the routes
app.use('/api', routes)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // console.log(`Server is running on http://localhost:${PORT}`);
});