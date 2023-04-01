const Songs = require('../models/Songs');

const GetSongs =  async (req, res) => {
    let songList = await Songs.find({});
    res.status(200).json({message: 'Success', data: songList});
};


module.exports = {
    GetSongs,
}