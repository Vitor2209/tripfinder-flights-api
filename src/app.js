const express = require('express');
const cors = require('cors');

const flightsRoutes = require('./routes/flights.routes');
const trainsRoutes = require('./routes/trains.routes');
const busesRoutes = require('./routes/buses.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/flights', flightsRoutes);
app.use('/api/trains', trainsRoutes);
app.use('/api/buses', busesRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'TripFinder API is live ✈️🚆🚌' });
});

module.exports = app;
