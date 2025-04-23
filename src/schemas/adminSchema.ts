import Joi from "joi";

const adminSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    image: Joi.string()
});

export default adminSchema;