/**
 * **************************************************
 *
 * @module database
 *
 * @description
 * This module provides an object that can be used
 * to establish a connection with the PostgreSQL
 * database.
 *
 * **************************************************
 */

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query: ', text);
    return pool.query(text, params, callback);
  },
};
