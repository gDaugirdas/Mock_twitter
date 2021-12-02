const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { getTweetLikes, postTweetLike } = require('../../controllers/v1');

router.get('/:id', isLoggedIn, getTweetLikes);

router.post('/:id', isLoggedIn, postTweetLike);

module.exports = router;
