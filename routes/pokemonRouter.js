"use strict";

const NodeRestClient = require('node-rest-client').Client;
const express = require('express');
const client = new NodeRestClient();
const router = express.Router();

router.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    client.get(`http://pokeapi.co/api/v2/pokemon/${id}`, (data, response) => {
        if(response.statusCode === 200) {
            const types = [];
            data.types.forEach(t => types.push(t.type.name));
            const pokemon = {
                id: data.id,
                name: data.name,
                types: types
            };
            res.send(pokemon);
        } else {
            res.status(response.statusCode).send();
        }
    });
});

module.exports = router;