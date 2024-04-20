const express = require('express');
const router = express.Router();
const cors = require(cors)
const { GetSongs, PostSongs } = require('../controllers/Songs');

app.use(cors())
router.get('/', GetSongs);
router.post('/', PostSongs);


module.exports = router;
