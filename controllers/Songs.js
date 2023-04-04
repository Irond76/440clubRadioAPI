const Songs = require('../models/Songs');

const GetSongs =  async (req, res) => {
    let songList = await Songs.find({});
    res.status(200).send(songList);
};
const PostSongs =  async (req, res) => {
    const {artistName, songTitle, websiteURL, songURL} = req.body;
    const newSong = new Songs({ artistName, songTitle,websiteURL,songURL});
    await newSong.save();
    res.status(201).json({msg: 'Song Created', data: newSong});
};


module.exports = {
    GetSongs,
    PostSongs
}