const sequelize = require('sequelize')
const express = require('express')
const routes = require('./src/routes')

const app = express()
app.use(express.json());
app.use(routes)

const db = require('./src/models')
db.sequelize.sync({force: true})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`On port ${PORT}`)
})