import * as api from '../api/requester';

export const logout = (token) => {
    return api.get('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': token
        },
    });
}

export const register = (email, pass) => {
    return api.post('/users/register', {email, pass})
}

export const login = (email, pass) => {
    return api.post('/users/login', { email, pass })
}