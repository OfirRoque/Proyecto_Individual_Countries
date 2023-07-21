const { Country, Activity } = require("../db.js")
const { Op } = require("sequelize");

const saveActivity = async (req, res) => {
    try {
        const { nameCountry, name, dificulty, duration, season } = req.body;
        if(!nameCountry || !name || !dificulty || !duration || !season ){
            return res.status(400).json({error: "Faltan datos"});
        } else {
            const data = await Activity.findOne({
                where:{ name: name }
            })
            if(data){
                return res.status(400).json({error: "Esta actividad ya fue creada"});
            } else {
                const activity = await Activity.create({
                    name,
                    dificulty,
                    duration,
                    season
                })
                const country = await Country.findAll({
                    where: {
                        name: {
                            [Op.iLike]: `%${nameCountry}%`
                        }
                    }
                })
                
                await activity.addCountry(country);
                console.log(country);
                return res.status(200).json({message: "Actividad creada con exito"});
            }
        }

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = saveActivity;
