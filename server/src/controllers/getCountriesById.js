const { Country, Activity } = require("../db.js");

const getCountriesByid = async (req, res) => {
    try {
        const { idPais } = req.params;
        const detail = await Country.findByPk(idPais, {
            include: [{ model: Activity, as: "activity" }]
        });
        return res.status(200).json(detail);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = getCountriesByid;