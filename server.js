const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const DB = process.env.MONGODB_URL;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const GetSongsRoute = require('./routes/Radio');
const GetRadioPlays = require('./routes/RadioPlayer');
app.use('/api/v1/radio', GetSongsRoute);
app.use('/api/v1/radio-player', GetRadioPlays)



const startUp = async () => {
    try {
        mongoose.connect(DB);
        app.listen(port, () => {
            console.log(`440club server listening on port ${port}\nConnected to the 440club Radio Database `);
        });
    } catch (error) {
        console.log(error);
    };
};

startUp();