module.exports = app => {
  app.get('/', (req, res) => {
    res.json({status: 'Ntask API'})
  })
}

/*
Firstly created on root/index.js as:

app.get('/', (req, res) => {
    res.json({status: 'Ntask API'})
  })

*/
