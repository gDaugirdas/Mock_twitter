const { postLogin, postRegister } = require('./auth');

const {
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('./tweets');

const { getTweetsCount } = require('./tweetsCount');

const { getTweetLike, postTweetLike } = require('./tweetsLike');

const { getUser } = require('./user');

const {
  updateProfilePicture,
  postProfileGalleryPicture,
  deleteProfileGalleryPicture,
} = require('./userPictures');

module.exports = {
  postLogin,
  postRegister,
  getTweets,
  getTweet,
  getTweetsCount,
  getTweetLike,
  postTweet,
  postTweetLike,
  updateTweet,
  deleteTweet,
  getUser,
  updateProfilePicture,
  postProfileGalleryPicture,
  deleteProfileGalleryPicture,
};
