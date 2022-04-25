module.exports = {
  db: {
    database: 'ntask',
    username: '',
    passsword: '',
    params: {
      dialect: 'sqlite',
      storage: 'ntask.sqlite',
      define: {
        underscored: true
      }
    }
  }
}

/*
This file holds the setup fro the conection between Sequelize and SQLite3

database - name of the database
username - username for access
password - user password
params.dialect - the kind of database used
params.storage - specific for SQLite3, name of directory in which data will be stored
params.define.underscored - formats the table fields names to lowercase and using underscore instead of blank spaces
*/
