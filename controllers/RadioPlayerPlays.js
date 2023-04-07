const RadioPlays = require('../models/RadioPlays');


const GetRadioPlays =  async (req, res) => {
    let radioPlays = await RadioPlays.find({});
    res.status(200).send(radioPlays);
};
const PostRadioPlays =  async (req, res) => {
    try {
        const {id:radioPlayer} = req.params.id;
        const radioPlayNumber = await RadioPlays.findOneAndUpdate({_id: radioPlayer}, req.body, {
            new:true,
            runValidators: true
        });
        res.status(201).json({radioPlayNumber});
        
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

module.exports = {
    PostRadioPlays,
    GetRadioPlays
}