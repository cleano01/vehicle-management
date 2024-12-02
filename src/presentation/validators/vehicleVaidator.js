const Joi = require('joi');

const vehicleSchemaCreate = Joi.object({
  licensePlate: Joi.string().required(),
  chassis: Joi.string().required(),
  renavam: Joi.string().required(),
  model: Joi.string().required(),
  brand: Joi.string().required(),
  year: Joi.number().strict().integer().required(),
})

function vehicleValidateCreate(req, res, next) {
  const { error, value } = vehicleSchemaCreate.validate(req.body, { stripUnknown: true });

  if (error) {  
      const menssage = error.details.map(err => err.message).join(', ');
      const err = new Error(menssage); 
      err.status = 400;
      throw err;  
  }

  req.vehicleValidate = value;

  next();
}

module.exports = { vehicleValidateCreate };
