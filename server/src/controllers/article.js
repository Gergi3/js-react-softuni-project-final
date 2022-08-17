const router = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const api = require('../services/article');
const { errorHandler } = require('../utils/errorHandler');


router.get('/', async (req, res) => {
    try {
        res.status(200).json(await api.getAll(req.query));
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(200).json({ users: [], count: 0 });
        }
        errorHandler(err, res, req)
    }
});

router.post('/', isAuth(), async (req, res) => {
    const item = {
        title: req.body.title,
        summary: req.body.summary,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        _ownerId: req.user._id
    };

    try {
        const result = await api.create(item);
        res.status(200).json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.get('/:id', preload(api), (req, res) => {
    try {
        res.json(res.locals.item);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.put('/:id', preload(api), isOwner(), async (req, res) => {
    try {
        const result = await api.updateById(res.locals.item, req.body);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.delete('/:id', preload(api), isAuth(), isOwner(), async (req, res) => {
    const id = req.params.id;

    try {
        const result = await api.deleteById(id);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});


module.exports = router;