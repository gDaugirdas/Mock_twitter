const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { getTweetsCount } = require('../../controllers/v1');

router.get('/', isLoggedIn, getTweetsCount);

module.exports = router;
