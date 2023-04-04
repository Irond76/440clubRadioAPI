const express = require('express');
const router = express.Router();

const { PostRadioPlays, GetRadioPlays } = require('../controllers/RadioPlayerPlays');

router.get('/', GetRadioPlays);
router.post('/', PostRadioPlays)


module.exports = router;