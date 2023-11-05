const {Sequelize} = require("sequelize");
require("dotenv").config();

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/userejemp`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  // dialectOptions: {
  //   schema: 'public' // Establece aquí el nombre de tu esquema
  // }
});

module.exports = {
  sequelize,
};
