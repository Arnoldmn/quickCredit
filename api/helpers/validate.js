import Joi from 'joi';

import { User, validate } from '../models/users';

const validateSignup = (user) => {
    const schema = Joi.object().keys({
        email: Joi.string().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/).email().trim(),
        firstname: Joi.string().regex(/^[A-Z]+$/).trim().required(),
        lastname: Joi.string().regex(/^[A-Z]+$/).trim().required(),
        address: Joi.string().trim().required(),
        password: Joi.string().regex(/^[A-Z]+$/).trim().min(6)
            .max(30)
            .required(),
        isAdmin: Joi.boolean.trim().required(),
    });
    return Joi.validate(user, schema);
};

const validateLogin = (user) => {
    const schema = Joi.object().keys({
        email: Joi.string().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/).email().trim(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).trim().required(),
    });
    return Joi.validate(user, schema);
};

const validateLoan = (loan) => {
    const schema = Joi.object.keys({
        loanType: Joi.string().trim().required(),
        tenor: Joi.number().integer().min(1).max(12)
            .required(),
        amount: Joi.number().required(),
    });
    return Joi.validate(loan, schema);
};

const loanApprovalValidate = (loan) => {
    const schema = Joi.object().keys({
        status: Joi.string().insensitive().valid('Approved', 'Rejected').required(),
    });
    return Joi.validate(loan, schema);
};


export default {
    validateLoan,
    validateLogin,
    validateSignup,
    loanApprovalValidate,
};
