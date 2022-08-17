import * as api from '../api/requester';

export const logout = (token) => {
    return fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': token
        },
    });
}

export const register = (email, password) => {
    return api.post('/users/register', { email, password })
}

export const login = (email, password) => {
    return api.post('/users/login', { email, password })
}