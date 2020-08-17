const mongoose = require('mongoose');

const MarioSchema = new mongoose.Schema({
    name:String,
    weight:Number
});

const MarioChar = mongoose.model('mariochar',MarioSchema);

module.exports = MarioChar;