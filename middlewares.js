module.exports = app => {
  app.set('port', 3000) // configures the running port
  app.set('json spaces', 4) // formats json view on browser
  app.use(bodyParser.json()) // allows the API to receive data in JSON format
  // refactored and brought from routes/tasks.js (app.route('/tasks').all):
  app.use((req, res, next) => {
    delete req.body.id
    next()
  })
}
