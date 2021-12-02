const Joi = require('joi');

const commentPostSchema = Joi.object().keys({
  comment: Joi.string()
    .min(1)
    .max(400)
    .trim()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'Comment cannot be empty!';
            break;
          case 'string.empty':
            err.message = 'Comment cannot be empty!';
            break;
          case 'string.min':
            err.message = `Comment should have at least ${err.local.limit} characters!`;
            break;
          case 'string.max':
            err.message = `Comment cannot have more than ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});

module.exports = {
  commentPostSchema,
};
