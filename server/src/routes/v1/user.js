const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { getUser } = require('../../controllers/v1');

router.get('/:id', isLoggedIn, getUser);

module.exports = router;
