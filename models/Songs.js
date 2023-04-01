const mongoose = require('mongoose');


const songSchema = new mongoose.Schema({
    artistName: {type: String, required: true},
    songTitle: {type: String, required: true},
    websiteURL: {type: String, required: true},
    songFile: {type: String, required: true}
},
{
    timestamps: true
}
);


const Songs = mongoose.model("Songs", songSchema);
module.exports = Songs;
