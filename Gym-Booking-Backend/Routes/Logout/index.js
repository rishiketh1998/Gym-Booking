const express = require('express');
const router = express.Router();
const checkAuth = require('../../checkAuth');

/**
 * @author Rishi
 * @description: Logout Route: Once the user posts on the log out route, it'll issue a new token in the name of previous token
 * to the user with a expiry date of 2ms. Therefore when the user click logout it'll get rid of the token the user has access to and thereby logging out the user
 */
router.post('/', checkAuth, (req, res) => {
  res.cookie('access_token', 'logout', {
    expiresIn: new Date(Date.now() * 2 * 1000),
    httpOnly: true,
  });
  res.status(200).send({'message': 'You have logged out'});
});

module.exports = router;
