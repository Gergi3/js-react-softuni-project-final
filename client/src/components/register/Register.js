import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authServices from '../../services/authServices';

import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { AuthContext } from '../../contexts/AuthContext';
import './Register.scss';

export const Register = (params) => {
    const [error, setError] = useState(null);
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
            .catch(err => setError(err.message))
    }
    return (
        <>
            <Breadcrumb
                title="Register"
                secondaryTitle="Sign up for an account here"
            />

            <FormWrapper title="Register">
                <p>{error}</p>
                <form onSubmit={submitHandler}>
                    <p>
                        <input
                            onChange={inputChangeHandler}
                            value={formState.email}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </p>
                    <p>
                        <input
                            onChange={inputChangeHandler}
                            value={formState.password}
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </p>
                    <p>
                        <input
                            type="submit"
                            className="boxed-btn"
                            defaultValue="Submit"
                        />
                    </p>
                </form>
            </FormWrapper>
        </>
    );
};
