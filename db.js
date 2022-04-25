const Sequelize = require('sequelize') // imports sequelize
const config = require('./config') // import config file

let sequelize = null
const {
  db: {database, username, password, params}
} = config

module.exports = () => {
  if (!sequelize) {
    sequelize = new Sequelize(database, username, password, params)
  }
  return sequelize
}

/*
This file is responsible for the conection between Sequelize and SQLite3. It has the Singleton design pattern, which assures only one instance of conection to sequelize

It must be included and loaded by consign
*/
