import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

export const PrivateGuard = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user.accessToken) {
        return <Navigate to="/login" replace={true} />
    }

    return children ? children : <Outlet />
};
