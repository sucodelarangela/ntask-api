const express = require('express')
const consign = require('consign')

const app = express()

// import models and routes into express app using consign
consign()
  .include('models')
  .then('middlewares.js')
  .then('routes')
  .then('boot.js') // initialize the server with app.listen
  .into(app)
