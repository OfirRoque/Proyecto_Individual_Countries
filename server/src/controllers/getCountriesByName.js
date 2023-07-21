const { Country } = require("../db.js");
const { Op } = require("sequelize");

const getCountriesByName = async(req, res) => {
    try {
        const { name } = req.query;
        const country = await Country.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        if(!country){
            return res.status(404).json({error: "Not Found"});
        } else {
            return res.status(200).json(country);
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}


module.exports = getCountriesByName;