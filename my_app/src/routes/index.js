const express = require('express')
const router = express.Router()
const firmRoutes = require('./firm.routes')

router.use(firmRoutes)

module.exports = router