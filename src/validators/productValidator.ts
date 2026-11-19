import Joi from "joi";
export const productSchema=Joi.object({sku:Joi.string().trim().max(40).required(),name:Joi.string().trim().max(150).required(),category:Joi.string().trim().max(100).required(),stock:Joi.number().integer().min(0).required(),expired_date:Joi.date().allow(null)});
