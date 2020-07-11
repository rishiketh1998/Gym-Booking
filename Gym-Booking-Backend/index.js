const express = require('express');
const app = express();
const port = process.env.port || 5000;
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gym_booking_db',
});

db.connect();

app.get('/', (req, res) => {
  res.send('Welcome to Gym Bookings');
});

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});


