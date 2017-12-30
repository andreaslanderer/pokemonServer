"use strict";

const pokemonRouter = require('./routes/pokemonRouter');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_DB || 'mongodb://localhost:27017/pokemonDB';

app.use('/', pokemonRouter);
mongoose.connect(MONGO_URL).catch(e => console.error(e));

app.listen(PORT, () => {
    console.log(`Server successfully started at port ${PORT}!`);
});

