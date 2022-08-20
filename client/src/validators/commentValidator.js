import { singleValidator, validator } from './validator';

const validations = {
    text: {
        required: [true, 'Comment is required'],
        min: [3, 'Comment must be between 3 and 1000 characters'],
        max: [1000, 'Comment must be between 3 and 1000 characters']
    },
}

export const isValidComment = (data) => 
    Object.values(validator(validations, data)).length === 0;


export const validateCommentInput = (key, value) => 
    singleValidator(validations, key, value);
