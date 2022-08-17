const { model, Schema } = require('mongoose');


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
    },
    hashedPassword: { type: String, required: true }
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;
