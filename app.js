"use strict";

const pokemonRouter = require('./routes/pokemonRouter');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', pokemonRouter);

app.get('/', (req, res) => {
   res.send('Home');
});

app.listen(PORT, () => {
    console.log(`Server successfully started at port ${PORT}!`);
});

