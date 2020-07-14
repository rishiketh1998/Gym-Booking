const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db.js');
const jwt = require('jsonwebtoken');


/**
 * @author Rishi
 * @description: It verifies whether the user has entered the right email id and if the user has entered the right email id,
 * then it verifies whether the right password is entered by hashing the password entered by the user and if the user has entered the right password, then it issues a
 * web token and stores it in the cookies with the name of access_token. If the user has either entered the wrong password or email it returns a message stating,
 * Please verify your email and password
 */
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
