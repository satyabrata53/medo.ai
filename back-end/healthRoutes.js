const express = require('express');
const { getHealthInfo } = require('./helthController');

const router = express.Router();

router.post('/query', getHealthInfo);

module.exports = router;

