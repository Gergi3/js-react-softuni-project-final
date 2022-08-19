import { useState } from "react";
import './FormInput.scss'

export const FormInput = ({
    changeHandler,
    validator,
    value,
    name,
    type,
    placeholder,
    disabled,
    isTextarea
}) => {
    const [isBlurred, setIsBlurred] = useState(true);
    const errors = validator(name, value)

    return (
        <p>
            {!isTextarea
                ? (
                    <input
                        value={value}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        onChange={changeHandler}
                        onBlur={setIsBlurred.bind(null, true)}
                        onFocus={setIsBlurred.bind(null, false)}
                        disabled={disabled}
                    />
                )
                : (
                    <textarea
                        value={value}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        onChange={changeHandler}
                        onBlur={setIsBlurred.bind(null, true)}
                        onFocus={setIsBlurred.bind(null, false)}
                        disabled={disabled}
                    />
                )
            }

            {value !== '' && isBlurred &&
                errors.map(error => <span key={error} className="form-error">{error}</span>)
            }
        </p>
    );
}