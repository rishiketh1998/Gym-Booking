const mysql = require('mysql');

/**
 * @author Rishi
 * @description: database connection
 * @type {Connection}
 */
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gym_booking_db',
});

db.connect();

module.exports = db;
