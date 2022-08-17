const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { ValidationError } = require('../utils/createValidationError');


const blacklist = new Set();

const JWT_SECRET = 't gcsergcserg  b920n3w4pc[w3tcawert6v9';

async function register(email, password) {
    // check if email is taken
    const existing = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (existing) {
        throw new ValidationError('Email is taken', 403);
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store user
    const user = new User({
        email,
        hashedPassword
    });

    await user.save();

    return createSession(user);
}

async function login(email, password) {
    // check if user exists
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (!user) {
        throw new ValidationError('Incorrect email or password', 403);
    }

    // verify password
    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new ValidationError('Incorrect email or password', 403);
    }

    return createSession(user);
}

function logout(token) {
    blacklist.add(token);
}

function createSession(user) {
    const payload = {
        email: user.email,
        _id: user._id
    };

    const accessToken = jwt.sign(payload, JWT_SECRET);

    return {
        email: user.email,
        accessToken,
        _id: user._id
    };
}

function validateToken(token) {
    if (blacklist.has(token)) {
        throw new ValidationError('Token is blacklisted', 401);
    }
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    logout,
    validateToken
};