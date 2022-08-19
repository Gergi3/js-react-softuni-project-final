import { createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [user, setUser] = useLocalStorage('user', {});

    const logoutUserHandler = () => {
        setUser({});
    };

    const loginUserHandler = (userData) => {
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{
            user,
            loginUserHandler,
            logoutUserHandler,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
