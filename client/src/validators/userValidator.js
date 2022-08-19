import { singleValidator, validator  } from './validator';

const validations = {
    email: {
        regex: [
            /^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/,
            'Email must be valid'
        ],
        required: [true, 'Email is required']
    },
    password: {
        min: [3, 'Password should be between 3 and 18 characters long'],
        max: [18, 'Password should be between 3 and 18 characters long'],
        required: [true, 'Password is required']
    },
}

export const isValidUser = (data) => 
    Object.values(validator(validations, data)).length === 0;


export const validateUserInput = (key, value) => 
    singleValidator(validations, key, value);
