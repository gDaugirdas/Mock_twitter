const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config');

module.exports = {
  isLoggedIn: (req, res, next) => {
    try {
      const token = req.header('authorization').split(' ')[1];
      const payload = jwt.verify(token, jwtSecret);
      req.user = payload;
      next();
    } catch (err) {
      res.status(401).send({ err: 'Invalid auth token' });
    }
  },
};
