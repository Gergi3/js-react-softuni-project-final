import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

export const PublicGuard = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user.accessToken) {
        return <Navigate to="/" replace={true} />
    }

    return children ? children : <Outlet />
};
