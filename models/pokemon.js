const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
   index: Number,
   name: String,
   types: []
});

module.exports = mongoose.model("Pokemon", pokemonSchema);