const express = require('express')

const router = express.Router()

const recordRoutes = require('./routes/record')
const apiToken = require('./routes/auth')
router.use(apiToken)
router.use(recordRoutes)


module.exports = router