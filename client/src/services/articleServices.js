import * as api from '../api/requester';

export const getAll = (page = '', limit = '', sort = '', order = '', search = '', criteria = '') => {
    const endpoint = `/data/articles?page=${page}&limit=${limit}&sort=${sort}&order=${order}&search=${search}&criteria=${criteria}`;
    console.log(endpoint);
    return api.get(endpoint);
}