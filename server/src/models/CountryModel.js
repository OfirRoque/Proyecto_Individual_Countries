const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const Country = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      set(value) {
        if (Array.isArray(value) && value.length > 0) {
          this.setDataValue('capital', value[0]);
        } else {
          this.setDataValue('capital', null);
        }
      },
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    population: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
};


module.exports = Country;