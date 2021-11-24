const { postLogin, postRegister } = require('./auth');
const { getTweets, postNewTweet } = require('./tweets');

module.exports = {
  postLogin,
  postRegister,
  getTweets,
  postNewTweet,
};
