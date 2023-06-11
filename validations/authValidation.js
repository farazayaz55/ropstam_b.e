const Joi = require("joi");
const { password } = require("./customValidation");

const signUp = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required(),
  }),
};



const signIn={
    body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required()
      }),
}

module.exports={
    signUp,
    signIn
}