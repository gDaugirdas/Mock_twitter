const Joi = require('joi');

const userRegisterSchema = Joi.object().keys({
  first_name: Joi.string()
    .min(3)
    .max(20)
    .trim()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'First name field cannot be empty!';
            break;
          case 'string.empty':
            err.message = 'First name field cannot be empty!';
            break;
          case 'string.min':
            err.message = `First name should have at least ${err.local.limit} characters!`;
            break;
          case 'string.max':
            err.message = `First name cannot have more than ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  last_name: Joi.string()
    .min(3)
    .max(20)
    .trim()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'Last name field cannot be empty!';
            break;
          case 'string.empty':
            err.message = 'Last name field cannot be empty!';
            break;
          case 'string.min':
            err.message = `Last name should have at least ${err.local.limit} characters!`;
            break;
          case 'string.max':
            err.message = `Last name cannot have more than ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  email: Joi.string()
    .min(5)
    .max(40)
    .trim()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'Email field cannot be empty!';
            break;
          case 'string.empty':
            err.message = 'Email field cannot be empty!';
            break;
          case 'string.min':
            err.message = `Email should have at least ${err.local.limit} characters!`;
            break;
          case 'string.max':
            err.message = `Email can't have more than ${err.local.limit} characters!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  password: Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!.%*#?&])[A-Za-z\d@$!%*#?&]/)
    .min(8)
    .max(20)
    .trim()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'Password field cannot be empty!';
            break;
          case 'string.empty':
            err.message = 'Password field cannot be empty!';
            break;
          case 'string.min':
            err.message = `Password should have at least ${err.local.limit} characters!`;
            break;
          case 'string.max':
            err.message = `Password can't have more than ${err.local.limit} characters!`;
            break;
          case 'string.pattern.base':
            err.message = `Password must contain at least one letter, one number and one special character`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  confirm_password: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.only':
            err.message = 'Password and confirm password fields must match!';
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});

const userLoginSchema = Joi.object().keys({
  email: Joi.string()
    .trim()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'Email field cannot be empty!';
            break;
          case 'string.empty':
            err.message = 'Email field cannot be empty!';
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  password: Joi.string()
    .trim()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case 'any.required':
            err.message = 'Password field cannot be empty!';
            break;
          case 'string.empty':
            err.message = 'Password field cannot be empty!';
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
};
