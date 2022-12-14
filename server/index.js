const mongoose = require('mongoose');
const express = require('express');

const cors = require('./src/middlewares/cors');
const auth = require('./src/middlewares/auth');
const articlesController = require('./src/controllers/articlesController');
const usersController = require('./src/controllers/usersController');

async function start() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/softuni-splash');

        console.log('DB Ready');
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use(auth());

    app.use('/data/articles', articlesController);
    app.use('/users', usersController);

    app.listen(3030, () => console.log('REST Service started on port 3030'));
}

start();