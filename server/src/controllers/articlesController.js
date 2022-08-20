const router = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const articleServices = require('../services/articleServices');
const commentServices = require('../services/commentServices');
const { errorHandler } = require('../utils/errorHandler');


router.get('/', async (req, res) => {
    try {
        res.status(200).json(await articleServices.getAll(req.query));
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
        owner: req.user._id
    };

    try {
        const result = await articleServices.create(item);
        res.status(200).json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.get('/:id', preload(articleServices), (req, res) => {
    try {
        res.json(res.locals.item);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.put('/:id', preload(articleServices), isOwner(), async (req, res) => {
    try {
        const result = await articleServices.updateById(res.locals.item, req.body);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.delete('/:id', preload(articleServices), isAuth(), isOwner(), async (req, res) => {
    const id = req.params.id;

    try {
        const result = await articleServices.deleteById(id);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req)
    }
});

router.get('/:id/comments', preload(articleServices), async (req, res) => {
    try {
        const result = await commentServices.getAllByArticleId(req.params.id);

        res.json(result);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.post('/:id/comments', preload(articleServices), isAuth(), async (req, res) => {
    const data = {
        text: req.body.text,
        owner: req.user._id,
        article: req.params.id
    }

    try {
        const result = await commentServices.create(data);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.put('/comments/:commentId',
    preload(commentServices, 'commentId'),
    isAuth(),
    isOwner(),
    async (req, res) => {
    try {
        const result = await commentServices.updateById(res.locals.item, req.body);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.delete('/comments/:commentId',
    preload(commentServices, 'commentId'),
    isAuth(),
    isOwner(),
    async (req, res) => {
    try {
        const result = await commentServices.deleteById(req.params.commentId);
        res.json(result);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

router.get('/:articleId/comments/:commentId',
    preload(articleServices, 'articleId'),
    preload(commentServices, 'commentId'),
    isAuth(),
    isOwner(),
    async (req, res) => {
    try {
        res.json(res.locals.item);
    } catch (err) {
        errorHandler(err, res, req);
    }
});

module.exports = router;