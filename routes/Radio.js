const express = require('express');
const router = express.Router();
const cors = require(cors)
app.use(cors())
const { GetSongs, PostSongs } = require('../controllers/Songs');


router.get('/', GetSongs);
router.post('/', PostSongs);


module.exports = router;
