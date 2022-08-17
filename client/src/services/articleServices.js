import * as api from '../api/requester';

export const getAll = (params) => {
    const { page, limit, sort, order, search, criteria, except } = params;
    const endpoint = `/data/articles?page=${page || ''}&limit=${limit || ''}&sort=${sort || 'createdAt'}&order=${order || 'desc'}&search=${search || ''}&criteria=${criteria || ''}&except=${except || ''}`;
    return api.get(endpoint);
}