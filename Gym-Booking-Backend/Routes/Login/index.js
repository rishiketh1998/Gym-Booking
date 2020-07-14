const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db.js');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  res.send('You can log in now now');
});

router.post('/', async (req, res) => {
  const sql = `Select * from users where email_id LIKE '${req.body.email_id}' `;
  db.query(sql, (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(401).send({'message': 'Please verify your email / password and enter again'});
    } else {
      bcrypt.compare(`${req.body.password}`, results[0].password, (err, validate) => {
        if (err) throw err;
        if (!validate) {
          res.status(401).send({'message': 'Please verify your email / password and enter again'});
        } else {
          const id = results[0].id;
          const token = jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });
          res.cookie('access_token', token, {
            maxAge: 3600000,
            httpOnly: true,
          });
          res.status(200).redirect('/');
        }
      });
    }
  });
});

module.exports = router;
