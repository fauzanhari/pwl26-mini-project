import Joi from "joi";
export const orderSchema=Joi.object({product_id:Joi.number().integer().positive().required(),customer_name:Joi.string().trim().max(150).required(),qty:Joi.number().integer().positive().required()});
