const { userRegisterSchema, userLoginSchema } = require('./auth');
const { tweetPostSchema, tweetUpdateSchema } = require('./tweet');
const { commentPostSchema } = require('./comment');

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  tweetPostSchema,
  tweetUpdateSchema,
  commentPostSchema,
};
