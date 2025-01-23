const knex = require("knex");  // knex package
config = require("../knexfile.js");// config file
const db = knex(config.development); // Actual connection to db



module.exports = db;
