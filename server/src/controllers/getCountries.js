const { Country } = require("./../db.js")

const getCountries = async(req, res) => {
    try {
        const date = await Country.findAll();
        return res.status(200).json(date);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}


module.exports = getCountries;