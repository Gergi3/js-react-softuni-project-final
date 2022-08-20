import * as api from '../api/requester';

export const getAllByArticleId = (articleId) => {
    return api.get(`/data/articles/${articleId}/comments`);
}

export const create = (articleId, data) => {
    return api.post(`/data/articles/${articleId}/comments`, data);
}

export const edit = (commentId, data) => {
    return api.put(`/data/articles/comments/${commentId}`, data);
}

export const del = (commentId) => {
    return api.del(`/data/articles/comments/${commentId}`);
}