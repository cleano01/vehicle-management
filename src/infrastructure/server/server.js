const express = require('express');
const vehicleRoutes = require('../../presentation/routes/vehicleRoutes');

function createServer(container) {
  const app = express();

  app.use(express.json());

  app.use('/vehicles', vehicleRoutes(container));

  app.use((err, req, res, next) => {
    if (err.status !== 500) {
      res.status(err.status).json({
        error: {
          message: err.message || 'Unprocessable Entity'
        }
      });
    } else {
      console.error(err.stack); 
      res.status(500).json({
        error: {
          message: 'Internal Server Error'
        }
      });
    }
  });

  return app;
}

module.exports = createServer;
