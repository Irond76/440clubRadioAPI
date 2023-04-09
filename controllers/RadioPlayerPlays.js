const RadioPlays = require('../models/RadioPlays');


const GetRadioPlays =  async (req, res) => {
    let radioPlays = await RadioPlays.find({});
    res.status(200).send(radioPlays);
};
const PostRadioPlays =  async (req, res) => {
    try {
        const {id:radioPlayer} = await req.params;
        const playCounts = await req.body;
        if (playCounts === null || playCounts === undefined) {
            return res.status(400).json({msg: "Play Count Must Be Number"});
        };
        const radioPlayNumber = await RadioPlays.findOneAndUpdate({_id: radioPlayer}, playCounts, {
            new:true,
            runValidators: true
        });
        res.status(200).json({radioPlayNumber});
        
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

module.exports = {
    PostRadioPlays,
    GetRadioPlays
}