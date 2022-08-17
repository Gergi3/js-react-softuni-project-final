const api = require('../services/user');
const { errorHandler } = require('../utils/errorHandler');

const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await api.register(email, password);
        res.status(201).json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await api.login(email, password);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.get('/logout', (req, res) => {
    api.logout(req.user.token);
    res.status(204).end();
});

module.exports = router;
