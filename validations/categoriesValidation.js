const Joi = require("joi");
const {objectId}=require('./customValidation')

const add={
    body:Joi.object().keys({
        name:Joi.string().required(),
    })
}


const remove={
    params:Joi.object().keys({
        id:Joi.string().custom(objectId).required()
    })
}



const update={
    query:Joi.object().keys({
        id:Joi.string().custom(objectId).required(),
        name:Joi.string().required(),
    })
}

module.exports={
    add,
    remove,
    update,
}