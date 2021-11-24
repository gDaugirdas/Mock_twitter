const { userRegisterSchema, userLoginSchema } = require('./auth');
const { tweetSchema } = require('./tweet');

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  tweetSchema,
};
