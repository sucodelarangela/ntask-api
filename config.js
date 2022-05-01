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
  },
  jwt: {
    secret: 'Nta$K-AP1',
    options: {session: false}
  }
}

/*
This file holds the setup for the conection between Sequelize and SQLite3

database - name of the database
username - username for access
password - user password
params.dialect - the kind of database used
params.storage - specific for SQLite3, name of directory in which data will be stored
params.define.underscored - formats the table fields names to lowercase and using underscore instead of blank spaces
jwt.secret - keeps a secret key string which will be a base for encoding/decoding the tokens. For security, it is recommended to use a long and complex string, using as much different characters as possible
jwt.options.session - false to avoid persistence of user tokens in server memmory
*/
