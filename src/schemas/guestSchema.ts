import Joi from "joi";

export const guestSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  image: Joi.string(),
  token: Joi.string(),
  status: Joi.string(),
  companion: Joi.array(),
  musicSuggestion: Joi.array(),
});

export const guestValidate = Joi.object({
  firstName: Joi.string().required(),
  token: Joi.string().required(),
});

export const tokenValidate = Joi.object({
  token: Joi.string().required(),
});
