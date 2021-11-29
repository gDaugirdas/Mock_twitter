const { postLogin, postRegister } = require('./auth');
const {
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
} = require('./tweets');

const { like } = require('./like');

const {
  getUser,
  postProfilePicture,
  postProfileGalleryPicture,
} = require('./user');

module.exports = {
  postLogin,
  postRegister,
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
  like,
  getUser,
  postProfilePicture,
  postProfileGalleryPicture,
};
