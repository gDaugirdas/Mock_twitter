const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const {
  getTweetsAndAllTheirCount,
  getTweetAndItsComments,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('../../controllers/v1');

router.get('/:page', isLoggedIn, getTweetsAndAllTheirCount);

router.get('/tweet/:id', isLoggedIn, getTweetAndItsComments);

router.post('/tweet', isLoggedIn, postTweet);

router.put('/tweet/:id', isLoggedIn, updateTweet);

router.delete('/tweet/:id', isLoggedIn, deleteTweet);

module.exports = router;
