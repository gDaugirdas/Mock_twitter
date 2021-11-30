const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { postTweetLike } = require('../../controllers/v1');

router.post('/:id', isLoggedIn, postTweetLike);

module.exports = router;
