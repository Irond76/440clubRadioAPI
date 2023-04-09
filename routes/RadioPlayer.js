const express = require('express');
const router = express.Router();

const { PostRadioPlays, GetRadioPlays } = require('../controllers/RadioPlayerPlays');

router.get('/', GetRadioPlays);
router.put('/:id', PostRadioPlays)


module.exports = router;