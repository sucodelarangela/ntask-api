const express = require('express')
const consign = require('consign')

const PORT = 3000
const app = express()

// to format JSON view in the browser, you can use the following code:
app.set('json spaces', 4)

// import routes into express app using consign
consign().include('routes').into(app)

app.listen(PORT, () => {
  console.log(`NTask API running on port ${PORT}`)
})
