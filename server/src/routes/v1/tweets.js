const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../middleware/isLoggedIn');

const {
  getTweetsAndAllTheirCount,
  getTweetAndItsComments,
  postTweet,
  updateTweet,
  deleteTweetAndItsComments,
} = require('../../controllers/v1');

router.get('/:page', isLoggedIn, getTweetsAndAllTheirCount);

router.get('/tweet/:id', isLoggedIn, getTweetAndItsComments);

router.post('/tweet', isLoggedIn, postTweet);

router.put('/tweet/:id', isLoggedIn, updateTweet);

router.delete('/tweet/:id', isLoggedIn, deleteTweetAndItsComments);

module.exports = router;
