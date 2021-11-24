const express = require('express');

const router = express.Router();

// const { isLoggedIn } = require('../../middleware/isLoggedIn');

const { getTweets, postNewTweet } = require('../../controllers/v1');

const {} = require('../../schemas');

router.get('/', getTweets);

router.post('/', postNewTweet);

module.exports = router;
