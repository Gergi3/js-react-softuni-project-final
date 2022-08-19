import { singleValidator, validator } from './validator';

const validations = {
    title: {
        required: [true, 'Title is required'],
        min: [3, 'Title must be between 3 and 100 characters'],
        max: [100, 'Title must be between 3 and 100 characters']
    },
    summary: {
        required: [true, 'Summary is required'],
        min: [3, 'Summary must be between 3 and 100 characters'],
        max: [100, 'Summary must be between 3 and 100 characters']
    },
    description: {
        required: [true, 'Description is required'],
        min: [10, 'Description must be between 10 and 5000 characters'],
        max: [5000, 'Description must be between 10 and 5000 characters']
    },
    imageUrl: {
        required: [true, 'Image URL is required'],
        regex: [/^https?:\/\/.+/, 'Image URL is not valid!']
    }
}

export const isValidArticle = (data) => 
    Object.values(validator(validations, data)).length === 0;


export const validateArticleInput = (key, value) => 
    singleValidator(validations, key, value);
