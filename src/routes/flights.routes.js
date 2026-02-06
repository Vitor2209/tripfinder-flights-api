const express = require('express');
const { searchFlights } = require('../controllers/flights.controller');

const router = express.Router();

router.get('/search', searchFlights);

module.exports = router;
