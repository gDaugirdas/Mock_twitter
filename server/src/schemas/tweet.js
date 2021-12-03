const Joi = require('joi');

const tweetPostSchema = Joi.object().keys({
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
});

const tweetUpdateSchema = Joi.object().keys({
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
});

module.exports = {
  tweetPostSchema,
  tweetUpdateSchema,
};
