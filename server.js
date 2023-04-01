const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.CLUBPORT || 5000;
const GetSongsRoute = require('./routes/Radio');

app.use('/api/v1/radio', GetSongsRoute);
app.use(express.json());
app.listen(port, () => {
    console.log(`440club server listening on port ${port} `);
});


