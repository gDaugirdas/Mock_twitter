const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const {
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('../../controllers/v1');

router.get('/', isLoggedIn, getTweets);

router.get('/:id', isLoggedIn, getTweet);

router.post('/', isLoggedIn, postTweet);

router.put('/:id', isLoggedIn, updateTweet);

router.delete('/:id', isLoggedIn, deleteTweet);

module.exports = router;
