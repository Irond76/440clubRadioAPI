const mongoose = require('mongoose');


const radioPlaysSchema = new mongoose.Schema({
    radioPlays: {type: Number}
}

);


const radioPlays = mongoose.model("Radio-Plays", radioPlaysSchema );
module.exports = radioPlays;