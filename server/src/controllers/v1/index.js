const { postLogin, postRegister } = require('./auth');
const {
  getTweets,
  getTweet,
  getTweetCount,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('./tweets');

const { like } = require('./like');

const {
  getUser,
  postProfilePicture,
  postProfileGalleryPicture,
  deleteProfileGalleryPicture,
} = require('./user');

module.exports = {
  postLogin,
  postRegister,
  getTweets,
  getTweet,
  getTweetCount,
  postTweet,
  updateTweet,
  deleteTweet,
  like,
  getUser,
  postProfilePicture,
  postProfileGalleryPicture,
  deleteProfileGalleryPicture,
};
