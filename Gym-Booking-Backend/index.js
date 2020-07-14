const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const checkAuth = require('./checkAuth');
const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config({path: './.env'});
app.use('/register', require('./Routes/Register'));
app.use('/login', require('./Routes/Login'));
app.use('/logout', require('./Routes/Logout'));

/**
 * @author Rishi
 * @description: Home Route: Once the user logs in, they'll be redirected to this route
 */
app.get('/', checkAuth, (req, res) => {
  res.send('You have logged In');
});

/**
 * @author Rishi
 * @description: the server the backend is running on.
 */
app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});


