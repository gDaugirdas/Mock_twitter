const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { getTweetLike, postTweetLike } = require('../../controllers/v1');

router.get('/:id', isLoggedIn, getTweetLike);

router.post('/:id', isLoggedIn, postTweetLike);

module.exports = router;
