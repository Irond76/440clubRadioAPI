const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.CLUBPORT || 5000;
const DB = process.env.MONGODB_URL;
const GetSongsRoute = require('./routes/Radio');

app.use('/api/v1/radio', GetSongsRoute);
app.use(express.json());



const startUp = async () => {
    try {
        mongoose.connect(DB);
        app.listen(port, () => {
            console.log(`440club server listening on port ${port}\nConnected to the 440club radio Database `);
        });
    } catch (error) {
        console.log(error);
    };
};

startUp();