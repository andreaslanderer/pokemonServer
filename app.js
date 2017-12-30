"use strict";

const pokemonRouter = require('./routes/pokemonRouter');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_DB || 'mongodb://localhost:27017/pokemonDB';

var server;

app.use('/', pokemonRouter);
mongoose.connect(MONGO_URL).catch((e) => {
    console.error(e);
    if(server) {
        console.error('Shutting down server...')
        server.close();
    }
});

server = app.listen(PORT, () => {
    console.log(`Server successfully started at port ${PORT}!`);
});

