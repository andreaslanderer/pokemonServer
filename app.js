"use strict";

const pokemonRouter = require('./routes/pokemonRouter');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_DB || 'mongodb://localhost:27017/pokemonDB';

const connectWithRetry = function() {
    return mongoose.connect(MONGO_URL, function(err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
            setTimeout(connectWithRetry, 5000);
        } else {
            app.listen(PORT, () => {
                console.log(`Server successfully started at port ${PORT}!`);
            });
        }
    });
};
connectWithRetry();

app.use('/', pokemonRouter);

