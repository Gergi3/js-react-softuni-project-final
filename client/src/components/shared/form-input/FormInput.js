import { useState } from "react";
import './FormInput.scss'

export const FormInput = ({
    changeHandler,
    validator,
    value,
    name,
    type,
    placeholder
}) => {
    const [isBlurred, setIsBlurred] = useState(true);
    const errors = validator(name, value)

    return (
        <p>
            <input
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                onBlur={setIsBlurred.bind(null, true)}
                onFocus={setIsBlurred.bind(null, false)}
            />
            {value !== '' && isBlurred &&
                errors.map(error => <span key={error} className="form-error">{error}</span>)
            }
        </p>
    );
}