import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authServices from '../../services/authServices';

import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import './Login.scss';

export const Login = () => {
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
        authServices.login(formState.email, formState.password)
            .then(res => {
                loginUserHandler(res);
                navigate('/');
            })
            .catch(() => {
                setError('Invalid username or password');
            })
    }

    return (
        <>
            <Breadcrumb
                title="Login"
                secondaryTitle="Sign into your account here"
            />

            <FormWrapper title="Login">
                <p>{error}</p>
                <form onSubmit={submitHandler}>
                    <p>
                        <input onChange={inputChangeHandler} value={formState.email} name="email" type="email" placeholder="Email" />
                    </p>
                    <p>
                        <input onChange={inputChangeHandler} value={formState.password} name="password" type="password" placeholder="Password" />
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
