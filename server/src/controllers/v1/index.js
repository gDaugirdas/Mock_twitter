const { postLogin, postRegister } = require('./auth');

const {
  getTweetsAndAllTheirCount,
  getTweetAndItsComments,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('./tweets');

const { getTweetLikes, postTweetLike } = require('./tweetsLike');

const { postComment } = require('./comments');

const { getUser } = require('./user');

const { updateProfilePicture } = require('./userPictures');

module.exports = {
  postLogin,
  postRegister,
  getTweetsAndAllTheirCount,
  getTweetAndItsComments,
  getTweetLikes,
  postTweet,
  postTweetLike,
  updateTweet,
  deleteTweet,
  postComment,
  getUser,
  updateProfilePicture,
};
