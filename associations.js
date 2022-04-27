module.exports = app => {
  const Users = app.models.users
  const Tasks = app.models.tasks

  Users.hasMany(Tasks)
  Tasks.belongsTo(Users, {foreignKey: 'userId'})
}

/*
Implementing associations between tables using Sequelize functions ".hasMany()" and ".belongsTo"

Invoking foreignKey allows the model to identify the name of the field in the model and in the table
*/
