const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.CLUBPORT || 5000;

app.get('/api/v1/radio', (req, res) => {
    res.status(200).json({msg: 'success'});
});

app.listen(port, () => {
    console.log(`440club server listening on port ${port} `);
});


