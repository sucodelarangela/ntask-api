module.exports = app => {
  async function start(port) {
    try {
      await app.db.authenticate()
      await app.db.sync()
      app.listen(app.get('port'), () => {
        console.log(`NTask API running on port ${app.get('port')}`)
      })
    } catch (err) {
      console.log('Error connecting to database.')
      console.error(err)
    }
  }

  start(app.get('port'))
}

/*
Code was refactored to ensure the API server will initialize ONLY afeter authenticating and connecting to the database via Sequelize.

app.db.authenticate() - authenticates the connection
app.db.sync() - synchronizes all tables with defined models

The methods above return a Promise. In this case, we need to use async/await to deal with them and, to do so, we needed to invoke the start() function.
*/
