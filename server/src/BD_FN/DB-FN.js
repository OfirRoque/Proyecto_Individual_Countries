const axios = require("axios");
const { Country } = require("../db.js");
const { defaults } = require("json-server");
const URL = "http://localhost:5000/countries";

const DB = async () => {
    const { data } = await axios.get(URL);
        for(const obj of data){
            await Country.findOrCreate({where: {id: obj.cca3}, defaults:{
            id: obj.cca3,
            name: obj.name.common,
            image: obj.flags.png,
            continent: obj.continents[0],
            capital: obj.capital,
            subregion: obj.subregion,
            area: obj.area,
            population: obj.population
        }})
        }
}


module.exports = {
    DB
}