import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authServices from "../../services/authServices";

import { AuthContext } from "../../contexts/AuthContext";

export const Logout = () => {
    const navigate = useNavigate();
    const { user, logoutUserHandler } = useContext(AuthContext);

    useEffect(() => {
        authServices.logout(user.accessToken)
            .then(() => {
                logoutUserHandler();
                navigate('/');
            })
    }, [logoutUserHandler, navigate, user.accessToken]);
};
