const express = require('express')
const recordController = require('../controllers/record')
const validateToken = require('../../../config').validateToken;

const router = express.Router()

router.put('/v1/record', recordController.putRecordIpByHost)
router.get('/v1/record', recordController.getRecordIpByHost)
router.get('/token/:tokenID', validateToken)


module.exports = router