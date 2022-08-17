const Comment = require('../models/Comment');

const getById = (commentId) => {
    return Comment.findById(commentId);
}

const getAllByArticleId = (articleId) => {
    const comments = Comment.find({ article: articleId });
    return comments;
}

const create = (item) => {
    const data = {
        text: item.text
    };

    const comments = Comment.create(data);
    return comments;
}

const updateById = async (existing, data) => {
    existing.text = data.text;

    await existing.save();

    return existing;
}

const deleteById = (commentId) => {
    const deleted = Comment.findByIdAndDelete(commentId);
    return deleted;
}

module.exports = {
    getAllByArticleId,
    create,
    updateById,
    getById,
    deleteById
}