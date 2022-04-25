module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`NTask API running on port ${app.get('port')}`)
  })
}
