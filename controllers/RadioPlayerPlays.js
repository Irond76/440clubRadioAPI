const RadioPlays = require('../models/RadioPlays');


const GetRadioPlays =  async (req, res) => {
    let radioPlays = await RadioPlays.find({});
    res.status(200).json({message: 'Success', data: radioPlays});
};
const PostRadioPlays =  async (req, res) => {
    const {radioPlays} = req.body;
    const newRadioPlaysNumber = new RadioPlays({radioPlays});
    await RadioPlays.save();
    res.status(201).send(newRadioPlaysNumber);
};

module.exports = {
    PostRadioPlays,
    GetRadioPlays
}