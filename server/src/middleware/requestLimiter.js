const rateLimit = require('express-rate-limit');

const requestLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 15, // start blocking after 15 requests
  message: {
    err: 'Too many requests, cool down and try again after few minutes',
  },
});

module.exports = requestLimiter;
