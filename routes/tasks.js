// adding static data to mold the endpoints
module.exports = app => {
  const Tasks = app.models.tasks // import tasks model

  // updating code to find json from findAll() in models/tasks.js
  app.get('/tasks', (req, res) => {
    Tasks.findAll({}, tasks => {
      res.json({tasks})
    })
  })
}
