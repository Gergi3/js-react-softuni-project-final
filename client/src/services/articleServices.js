import * as api from '../api/requester';

export const getAll = (params) => {
    const { page, limit, sort, order, search, criteria, except, owner } = params;
    const endpoint = `/data/articles?page=${page || ''}&limit=${limit || ''}&sort=${sort || 'createdAt'}&order=${order || 'desc'}&search=${search || ''}&criteria=${criteria || ''}&except=${except || ''}&owner=${owner || ''}`;
    return api.get(endpoint);
}

export const getById = (id) => {
    return api.get(`/data/articles/${id}`)
}

export const create = (data) => {
    return api.post('/data/articles', data)
}

export const editById = (id, data) => {
    return api.put(`/data/articles/${id}`, data);
}

export const deleteById = (id) => {
    return api.del(`/data/articles/${id}`);
}