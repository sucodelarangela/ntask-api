const bcrypt = require('bcrypt'); // importing bcrypt
const {DataTypes} = require('sequelize');

module.exports = app => {
  const Users = app.db.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      // using bcrypt to encrypt the user password before saving it in db
      set(value) {
        const salt = bcrypt.genSaltSync();
        const password = bcrypt.hashSync(value, salt);
        this.setDataValue('password', password);
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  return Users;
};

/*
Everytime a value is defined for password field in db (for example: Users.create({password: '123'})), this value will be redefined with an encrypted password created by the combination of bcrypt.genSaltSync() and bcrypt.hashSync() functions. This new encrypted value will be returned with this.setDataValue()
*/
