const express = require('express');
const requestLimiter = require('../../middleware/requestLimiter');

const router = express.Router();

const { postRegister, postLogin } = require('../../controllers/v1');

router.post('/register', requestLimiter, postRegister);

router.post('/login', requestLimiter, postLogin);

module.exports = router;
