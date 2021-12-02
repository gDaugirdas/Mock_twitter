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

router.get('/:page', isLoggedIn, getTweets);

router.get('/tweet/:id', isLoggedIn, getTweet);

router.post('/', isLoggedIn, postTweet);

router.put('/tweet/:id', isLoggedIn, updateTweet);

router.delete('/tweet/:id', isLoggedIn, deleteTweet);

module.exports = router;
