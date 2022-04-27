// Code refactored: draft of necessary routes to manage the tasks

module.exports = app => {
  const Tasks = app.models.Tasks

  app
    .route('/tasks')
    .all((req, res, next) => {
      // Middleware for pre execution of routes
      delete req.body.id // forbids the use of req.body.id to avoid overwritting of it on database
      next()
    })
    .get(async (req, res) => {
      try {
        // "/tasks": lists all tasks
        const result = await Tasks.findAll()
        res, json(result)
      } catch (err) {
        res.status(412).json({msg: err.message})
        // (412) Precondition failed - generically returns validation or consult errors
      }
    })
    .post(async (req, res) => {
      try {
        // "/tasks": creates a new task
        const result = await Tasks.create(req.body)
        res.json(result)
      } catch (err) {
        res.status(412).json({msg: err.message})
        // (412) Precondition failed - generically returns validation or consult errors
      }
    })

  app
    .route('/tasks/:id')
    .all((req, res, next) => {
      // Middleware for pre execution of routes
      delete req.body.id // forbids the use of req.body.id to avoid overwritting of it on database
      next()
    })
    .get((req, res) => {
      // "tasks/1": Consults a task
    })
    .put((req, res) => {
      // "tasks/1": Updates a task
    })
    .delete((req, res) => {
      // "tasks/1": Deletes a task
    })
}

// PREVIOUS CODE:
// // adding static data to mold the endpoints
// module.exports = app => {
//   const Tasks = app.models.tasks // import tasks model

//   // updating code to find json from findAll() in models/tasks.js
//   // then refactored to use async/await try/catch
//   app.get('/tasks', async (req, res) => {
//     try {
//       const tasks = await Tasks.findAll() // find tasks
//       res.json({tasks}) // return tasks in json format
//     } catch (err) {
//       res.status(500).json(err) // if error, returns status 500
//     }
//   })
// }
