const { DataTypes } = require("sequelize");
const {sequelize} = require("../db"); // Asegúrate de importar sequelize desde la ubicación correcta

const User = sequelize.define('User', {
  tarea: {
    type: DataTypes.STRING,
    allowNull: false
  },
  infotarea: {
    type: DataTypes.STRING
  }
}, {
  // Otras opciones del modelo
});

module.exports = {
  User
};
