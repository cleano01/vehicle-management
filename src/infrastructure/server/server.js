const express = require('express');
const vehicleRoutes = require('../../presentation/routes/vehicleRoutes');

function createServer(container) {
  const app = express();

  app.use(express.json());

  app.use('/vehicles', vehicleRoutes(container));

  return app;
}

module.exports = createServer;
