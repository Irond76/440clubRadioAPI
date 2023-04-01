const express = require('express');
const router = express.Router();
const { GetSongs } = require('../controllers/GetSongs');

router.get('/', GetSongs);

module.exports = router;