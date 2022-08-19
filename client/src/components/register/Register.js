import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authServices from '../../services/authServices';
import { isValidUser, validateUserInput } from '../../validators/userValidator'

import { FormInput } from '../shared/form-input/FormInput';
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { AuthContext } from '../../contexts/AuthContext';
import './Register.scss';

export const Register = () => {
    const [emailIsTaken, setEmailIsTaken] = useState(false);
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });
    const { loginUserHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        setFormState(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        authServices.register(formState.email, formState.password)
            .then(res => {
                loginUserHandler(res);
                navigate('/');
            })
            .catch(() => setEmailIsTaken(true));
    }

    return (
        <>
            <Breadcrumb
                title="Register"
                secondaryTitle="Sign up for an account here"
            />

            <FormWrapper title="Register">
                {emailIsTaken &&
                    <p className="form-error">User with this email is already registered</p>
                }
                <form onSubmit={submitHandler}>
                    <FormInput
                        value={formState.email}
                        name="email"
                        type="text"
                        placeholder="Email"
                        changeHandler={inputChangeHandler}
                        validator={validateUserInput}
                    />
                    <FormInput
                        value={formState.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                        changeHandler={inputChangeHandler}
                        validator={validateUserInput}
                    />
                    <p>
                        <input
                            type="submit"
                            className="boxed-btn"
                            value="Register"
                            disabled={!isValidUser(formState)}
                        />
                    </p>
                </form>
            </FormWrapper>
        </>
    );
};
