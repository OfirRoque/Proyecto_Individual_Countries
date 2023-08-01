const { DataTypes } = require("sequelize");

const Activity = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificulty: {
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 24
            }
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["Verano", "Otoño", "Invierno", "Primavera"]]
            }
        }
    })
}


module.exports = Activity;