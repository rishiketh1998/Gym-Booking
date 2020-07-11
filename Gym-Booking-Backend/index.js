const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to Gym Bookings');
});

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});


