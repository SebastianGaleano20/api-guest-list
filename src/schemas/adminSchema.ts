import Joi from "joi";

export const adminSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    image: Joi.string().required(),
});

export const validateAdmin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});