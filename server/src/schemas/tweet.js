const Joi = require('joi');

const tweetSchema = Joi.object().keys({
  tweet_text: Joi.string()
    .min(1)
    .max(400)
    .trim()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'Tweet text cannot be empty!';
            break;
          case 'string.empty':
            err.message = 'Tweet text cannot be empty!';
            break;
          case 'string.min':
            err.message = `Tweet text should have at least ${err.local.limit} characters!`;
            break;
          case 'string.max':
            err.message = `Tweet text cannot have more than ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  tweet_attachment: Joi.string()
    .min(5)
    .max(400)
    .trim()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'string.min':
            err.message = `Attached link should have at least ${err.local.limit} characters!`;
            break;
          case 'string.max':
            err.message = `Attached link should cannot have more than ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  user_id: Joi.number()
    .integer()
    .min(1)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'User ID cannot be empty!';
            break;
          case 'number.integer':
            err.message = 'User ID must be an integer!';
            break;
          case 'number.min':
            err.message = `User ID must be at least ${err.local.limit}!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});

module.exports = {
  tweetSchema,
};
