export const singleValidator = (validations, key, value) => {
    const validator = validations[key];
    if (!validator) {
        return [];
    }

    const isMin = validator.min && value?.length < validator.min[0];
    const isMax = validator.max && value?.length > validator.max[0];
    const isRegex = validator.regex && !validator.regex[0]?.test(value);
    const isRequired = validator.required && value?.length === 0;

    const messages = [];

    if (isMin) {
        messages.push(validator.min[1]);
    }
    if (isMax) {
        messages.push(validator.max[1]);
    }
    if (isRegex) {
        messages.push(validator.regex[1]);
    }
    if (isRequired) {
        messages.push(validator.required[1])
    }

    return messages;
}

export const validator = (validations, data) => {
    const errors = {};
    Object.entries(data).forEach(([key, value]) => {
        const messages = singleValidator(validations, key, value);
        if (messages.length > 0) {
            errors[key] = messages;
        }
    });
    return errors;
}