const express = require('express')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.json({status: 'NTask API'})
})

app.listen(PORT, () => {
  console.log(`NTask API running on port ${PORT}`)
})
