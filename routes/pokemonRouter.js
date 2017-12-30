"use strict";

const NodeRestClient = require('node-rest-client').Client;
const express = require('express');
const client = new NodeRestClient();
const router = express.Router();
const Pokemon = require('../models/pokemon');

router.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    client.get(`http://pokeapi.co/api/v2/pokemon/${id}`, (data, response) => {
        if(response.statusCode === 200) {
            const types = [];
            data.types.forEach(t => types.push(t.type.name));
            const pokemon = {
                index: data.id,
                name: data.name,
                types: types
            };
            Pokemon.create(pokemon, (err, pokemon) => {
                if(err) {
                    console.error(err);
                }
            });
            res.send(pokemon);
        } else {
            res.status(response.statusCode).send();
        }
    });
});

module.exports = router;