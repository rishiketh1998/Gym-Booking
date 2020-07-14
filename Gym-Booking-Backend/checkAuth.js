const jwt = require('jsonwebtoken');

/**
 * @author Rishi
 * @description: middleware function that checks whether the entered user is issued with a valid token or not
 * @param req
 * @param res
 * @param next
 * @returns {any}
 */
module.exports = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({'message': 'Authentication failed'});
  }
};
