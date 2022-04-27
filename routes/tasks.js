// adding static data to mold the endpoints
module.exports = app => {
  const Tasks = app.models.tasks // import tasks model

  // updating code to find json from findAll() in models/tasks.js
  // then refactored to use async/await try/catch
  app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Tasks.findAll() // find tasks
      res.json({tasks}) // return tasks in json format
    } catch (err) {
      res.status(500).json(err) // if error, returns status 500
    }
  })
}
