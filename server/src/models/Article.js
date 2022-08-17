const { model, Schema, Types: { ObjectId } } = require('mongoose');

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: [3, 'Title must be between 3 and 100 characters'],
        max: [100, 'Title must be between 3 and 100 characters']
    },
    summary: {
        type: String,
        required: true,
        min: [3, 'Summary must be between 3 and 100 characters'],
        max: [100, 'Summary must be between 3 and 100 characters']
    },
    description: {
        type: String,
        required: true,
        min: [10, 'Description must be between 10 and 5000 characters'],
        max: [5000, 'Description must be between 10 and 5000 characters']
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\/.+/, 'ImageUrl is not valid!']
    },
    comments: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    owner: {
        type: ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const Article = model('Article', articleSchema);

module.exports = Article;