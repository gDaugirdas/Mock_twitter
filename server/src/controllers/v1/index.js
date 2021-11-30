const { postLogin, postRegister } = require('./auth');

const {
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('./tweets');

const { getTweetsCount } = require('./tweetsCount');

const { postTweetLike } = require('./tweetsLike');

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
  postTweet,
  postTweetLike,
  updateTweet,
  deleteTweet,
  getUser,
  updateProfilePicture,
  postProfileGalleryPicture,
  deleteProfileGalleryPicture,
};
