const { postLogin, postRegister } = require('./auth');

const {
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('./tweets');

const { getTweetsCount } = require('./tweetsCount');

const { getTweetLikes, postTweetLike } = require('./tweetsLike');

const { getUser } = require('./user');

const { postComment } = require('./comments');

const { updateProfilePicture } = require('./userPictures');

module.exports = {
  postLogin,
  postRegister,
  getTweets,
  getTweet,
  getTweetsCount,
  getTweetLikes,
  postTweet,
  postTweetLike,
  updateTweet,
  deleteTweet,
  postComment,
  getUser,
  updateProfilePicture,
};
