const { userRegisterSchema, userLoginSchema } = require('./auth');
const { tweetPostSchema, tweetUpdateSchema } = require('./tweet');

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  tweetPostSchema,
  tweetUpdateSchema,
};
