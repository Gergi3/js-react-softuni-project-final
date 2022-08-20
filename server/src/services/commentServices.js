const Comment = require('../models/Comment');

const Article = require('../models/Article')

const getById = (commentId) => {
    return Comment.findById(commentId);
}

const getAllByArticleId = async (articleId) => {
    const article = await Article.findById(articleId)
        .populate({
            path: 'comments',
            populate: {
                path: 'owner',
                select: 'email',
                model: 'User'
            }
        });

    return article.comments;
}

const create = async (item) => {
    const data = {
        text: item.text,
        article: item.article,
        owner: item.owner
    };
    const comment = await Comment.create(data);

    const article = await Article.findById(item.article);
    article.comments.push(comment);
    article.save();
    
    return comment;
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