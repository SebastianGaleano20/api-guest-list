import Joi from "joi";

export const guestSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  token: Joi.string(),
  status: Joi.string(),
  confirmedGuests: Joi.array().optional,
  musicSuggestion: Joi.array().optional,
});

export const guestValidate = Joi.object({
  firstName: Joi.string().required(),
  token: Joi.string().required(),
});

export const tokenValidate = Joi.object({
  token: Joi.string().required(),
});
