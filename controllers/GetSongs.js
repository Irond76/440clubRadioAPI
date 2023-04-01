

const GetSongs = ((req, res) => {
    res.status(200).json({msg: 'success from the controller!'});
});


module.exports = {
    GetSongs,
}