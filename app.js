"use strict";

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send('Home');
});

app.listen(PORT, () => {
    console.log(`Server successfully started at port ${PORT}!`);
});

