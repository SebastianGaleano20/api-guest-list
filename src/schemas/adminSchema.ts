import Joi from "joi";

export const adminSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});