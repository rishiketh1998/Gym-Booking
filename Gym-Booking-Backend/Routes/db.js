const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gym_booking_db',
});

db.connect();

module.exports = db;
