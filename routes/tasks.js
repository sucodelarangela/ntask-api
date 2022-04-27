// Code refactored: draft of necessary routes to manage the tasks

module.exports = app => {
  const Tasks = app.models.Tasks

  app
    .route('/tasks')
    .all((req, res) => {
      // Middleware for pre execution of routes
    })
    .get((req, res) => {
      // "/tasks": lists tasks
    })
    .post((req, res) => {
      // "/tasks": registers a new task
    })

  app
    .route('/tasks/:id')
    .all((req, res) => {
      // Middleware for pre execution of routes
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
