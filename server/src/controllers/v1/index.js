const { postLogin, postRegister } = require('./auth');
const {
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('./tweets');

module.exports = {
  postLogin,
  postRegister,
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
};
