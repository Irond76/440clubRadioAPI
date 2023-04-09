


function checkPlayValue (req, res, next) {

    if (playCounts === 'null' || playCounts === undefined) {
        return res.status(400).json({msg: "Radio Player ID Must be number"});
    }
    next();
}

module.exports = checkPlayValue;