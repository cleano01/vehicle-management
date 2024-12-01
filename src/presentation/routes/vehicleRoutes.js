const express = require('express');

function vehicleRoutes({ vehicleController }) {
  const router = express.Router();

  router.post('/', vehicleController.create);
  router.get('/', vehicleController.getAll);
  router.get('/:id', vehicleController.getById);
  router.put('/:id', vehicleController.update);
  router.delete('/:id', vehicleController.delete);

  return router;
}

module.exports = vehicleRoutes;
