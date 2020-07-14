const express = require('express');
const app = express();
const port = process.env.port || 5000;
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const checkAuth = require('./checkAuth');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config({path: './.env'});
app.use('/register', require('./Routes/Register'));
app.use('/login', require('./Routes/Login'));


app.get('/', checkAuth, (req, res) => {
  res.send('You have logged In');
});

app.get('/logout', checkAuth, (req, res) => {
  res.send('You can logout here');
});

app.post('/logout', checkAuth, (req, res) => {
  res.cookie('access_token', 'logout', {
    expiresIn: new Date(Date.now() * 2 * 1000),
    httpOnly: true,
  });
  res.status(200).redirect('/');
});

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});


