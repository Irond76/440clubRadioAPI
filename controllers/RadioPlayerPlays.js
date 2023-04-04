const RadioPlays = require('../models/RadioPlays');


const GetRadioPlays =  async (req, res) => {
    let radioPlays = await RadioPlays.find({});
    res.status(200).send(radioPlays);
};
const PostRadioPlays =  async (req, res) => {
    const {radioPlays} = req.body;
    const newRadioPlaysNumber = new RadioPlays({radioPlays});
    await RadioPlays.save();
    res.status(201).json({msg: 'Radio Plays Updated', data: newRadioPlaysNumber});
};

module.exports = {
    PostRadioPlays,
    GetRadioPlays
}