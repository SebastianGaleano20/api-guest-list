import Joi from "joi";
export const guestSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    token: Joi.string(),
    status: Joi.string().valid("PENDING", "CONFIRMED", "DECLINED").optional(),
    confirmedGuests: Joi.array().optional,
    musicSuggestion: Joi.array().optional,
});
export const updateGuestSchema = Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    token: Joi.string().optional(),
    status: Joi.string().valid("PENDING", "CONFIRMED", "DECLINED").optional(),
    confirmedGuests: Joi.string().optional(),
    musicSuggestion: Joi.string().optional(),
});
export const guestValidate = Joi.object({
    firstName: Joi.string().required(),
    token: Joi.string().required(),
});
export const tokenValidate = Joi.object({
    token: Joi.string().required(),
});
