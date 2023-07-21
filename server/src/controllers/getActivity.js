const { Activity } = require("../db.js");

const getActivies = async (req , res) => {
    try {
        const activities = await Activity.findAll();
        return res.status(200).json(activities);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }

}


module.exports = getActivies;