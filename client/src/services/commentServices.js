import * as api from '../api/requester';

export const getAllByArticleId = (articleId) => {
    return api.get(`/data/articles/${articleId}/comments`);
}

export const create = (articleId, data) => {
    return api.post(`/data/articles/${articleId}/comments`, data);
}