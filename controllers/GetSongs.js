const Songs = require('../models/Songs');

const GetSongs =  async (req, res) => {
    let songList = await Songs.find({});
    console.log(songList)
    res.json(songList);
    // console.log('Get Songs Request Made');
    // res.status(200).json({msg: 'success from the controller!'});
};


module.exports = {
    GetSongs,
}