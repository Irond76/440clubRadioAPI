const Songs = require('../models/Songs');

const GetSongs =  async (req, res) => {
    let songList = await Songs.find({});
    res.status(200).json({message: 'Success', data: songList});
};
const PostSongs =  async (req, res) => {
    const {artistName, songTitle, websiteURL, songURL} = req.body;
    const newSong = new Songs({ artistName, songTitle,websiteURL,songURL});
    await newSong.save();
    res.status(201).send(newSong);
};


module.exports = {
    GetSongs,
    PostSongs
}