const {DataTypes} = require('sequelize')

// temporary static model
module.exports = app => {
  const Tasks = app.db.define('Tasks', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })

  return Tasks
}

// This model initially had only the function Tasks.findAll(), which received two arguments: params and callback.

/*
Code was refactored.

app.db.define('Tasks') - responsible for creating the model class in back-end and creating a table. The fields of this table are defined in its second parameter (which is an object with 'id', 'title' and 'done')

*/
