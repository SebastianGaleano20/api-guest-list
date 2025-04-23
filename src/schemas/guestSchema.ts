import Joi from "joi";

const guestSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    image: Joi.string(),
    token: Joi.string(),
    status: Joi.string(),
    companion: Joi.array(),
    musicSuggestion: Joi.array()
})

export default guestSchema;