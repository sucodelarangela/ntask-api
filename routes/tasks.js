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
    .get(async (req, res) => {
      try {
        // "tasks/1": Consults a task
        const {id} = req.params
        const where = {id}
        const result = await Tasks.findOne({where})

        if (result) {
          res.json(result)
        } else {
          res.sendStatus(404) // Not found
        }
      } catch (err) {
        res.status(412).json({msg: err.message})
      }
    })
    .put(async (req, res) => {
      try {
        // "tasks/1": Updates a task
        const {id} = req.params
        const where = {id}
        await Tasks.update(req.body, {where}) // 1st param: data to be updated; 2nd param: object with consult data from the tasks to be updated
        res.sendStatus(204) // No Content: it means the requisition was successful, but no data is returned
      } catch (err) {
        res.status(412).json({msg: err.message})
      }
    })
    .delete((req, res) => {
      try {
        // "tasks/1": Deletes a task
        const {id} = req.params
        const where = {id}
        await Tasks.destroy({where})
        res.sendStatus(204)
      } catch (err) {
        res.status(412).json({msg: err.message})
      }
    })
}

// Tasks.create() and Tasks.update() clean the fields that do not exist in the models, so there is no problem to send req.body directly

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
