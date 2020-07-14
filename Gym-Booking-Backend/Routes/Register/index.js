const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const db = require('../db.js');


/**
 * @author Rishi
 * @description: It uses joi library to verify all the information entered by the user is valid
 */
const dataValidation = (body) => {
  const schema = Joi.object().keys({
    first_name: Joi.string().trim().required(),
    last_name: Joi.string(),
    date_of_birth: Joi.string().trim().min(10).max(10).required(),
    city: Joi.string(),
    phone_no: Joi.string().min(9).max(11).required(),
    postal_code: Joi.string().min(6).max(8).required(),
    email_id: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).max(15).required(),
  });
  const result = Joi.validate(body, schema, (err, value) => {
    if (err) return (err['details'][0]['message']);
    return value;
  });
  return result;
};

/**
 * @author Rishi
 * @description: displays all the user registered details
 */
router.get('/', (req, res) => {
  const sql = 'Select * from users';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

/**
 * @author Rishi
 * @description: inserts data to the database if they are valid else it'll send a message to the user
 */
router.post('/', async (req, res) => {
  const result = dataValidation(req.body);
  if (typeof(result) === 'string') {
    res.send(result);
  } else {
    result['password'] = await bcrypt.hash(result['password'], 8);
    console.log(result['phone_no']);
    const sql = 'Insert Into users SET ?';
    console.log(result['phone_no']);
    const data = {
      first_name: result['first_name'],
      last_name: result['last_name'],
      date_of_birth: result['date_of_birth'],
      phone_no: result['phone_no'],
      postal_code: result['postal_code'],
      city: result['city'],
      email_id: result['email_id'],
      password: result['password'],
    };
    db.query(sql, data, (err, result) => {
      if (err) {
        res.send(err['sqlMessage']);
        throw err;
      }
      res.redirect('/login');
    });
  }
});

module.exports = router;
