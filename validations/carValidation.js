const Joi = require("joi");
const {objectId}=require('./customValidation')

const add={
    body:Joi.object().keys({
        name:Joi.string().required(),
        categories:Joi.string().custom(objectId).required(),
        color:Joi.string().required(),
        model:Joi.number().required(),
        make:Joi.string().required(),
        registrationNumber:Joi.string().required()
    })
}


const remove={
    params:Joi.object().keys({
        id:Joi.string().custom(objectId).required()
    })
}


const getCategoryAgainstId={
    params:Joi.object().keys({
        id:Joi.string().custom(objectId).required()
    })
}

const update={
    query:Joi.object().keys({
        id:Joi.string().custom(objectId).required(),
        name:Joi.string().required(),
        categories:Joi.string().custom(objectId).required(),
        color:Joi.string().required(),
        model:Joi.number().required(),
        registrationNumber:Joi.string().required(),
        make:Joi.string().required()
    })
}

module.exports={
    add,
    remove,
    update,
    getCategoryAgainstId
}