const { model, Schema, Types: { ObjectId } } = require('mongoose');

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
        minLength: [3, 'Comment must be between 3 and 1000 characters'],
        maxLength: [1000, 'Comment must be between 3 and 1000 characters']
    },
    article: {
        type: ObjectId,
        ref: 'Article'
    },
    owner: {
        type: ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const Comment = model('Comment', commentSchema);

module.exports = Comment;