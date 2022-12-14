const Article = require('../models/Article');
const { ValidationError } = require('../utils/createValidationError');


async function getAll(query) {
    const page = parseInt(query?.page) || 1; // 1
    const limit = parseInt(query?.limit) || 5; // 5
    const sort = query?.sort; // createdAt
    const order = query?.order; // desc/asc
    const search = query?.search; // asdasd
    const criteria = (query?.criteria || '').trim(); // summary
    const owner = (query?.owner || '') // id of owner
    const except = (query?.except || '').trim(); // summary
    const skipIndex = (page - 1) * limit;

    const sortCriteria = {};

    let buildedQuery = {};
    if (criteria === 'createdAt' || criteria === 'updatedAt') {
        throw new ValidationError('You cannot serach by createdAt or updatedAt.', 403)
    }

    if (sort && sort !== 'null' && order && order !== 'null') {
        sortCriteria[sort] = order;
    }

    if (search && search !== 'null' && criteria && criteria !== 'null') {
        buildedQuery[criteria] = { $regex: new RegExp(search, 'gi') };
    }

    if (owner && owner !== 'null') {
        buildedQuery['owner'] = owner;
    }

    if (except && except !== 'null') {
        buildedQuery._id = { $nin: except.split(',') }
    }

    let count = await Article
        .find(buildedQuery)
        .countDocuments();

    let articles = await Article
        .find(buildedQuery)
        .select('title summary description imageUrl createdAt updatedAt owner')
        .limit(limit)
        .skip(skipIndex)
        .sort(sortCriteria)
        .populate('owner', 'email')
        .lean();

    return { articles, count };
}

async function create(item) {
    const result = new Article({
        title: item.title,
        summary: item.summary,
        description: item.description,
        imageUrl: item.imageUrl,
        owner: item.owner
    });

    await result.save();

    return result;
}

async function getById(id) {
    return Article.findById(id).populate('owner', 'email');
}

async function updateById(existing, item) {
    existing.title = item.title;
    existing.summary = item.summary;
    existing.description = item.description;
    existing.imageUrl = item.imageUrl;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    return await Article.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    create,
    getById,
    updateById,
    deleteById
};