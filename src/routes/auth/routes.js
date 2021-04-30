const express = require('express')
const apiToken = require('./routes/auth')

const router = express.Router()

const recordRoutes = require('./routes/record')
router.use(recordRoutes)
router.use(apiToken)

module.exports = router