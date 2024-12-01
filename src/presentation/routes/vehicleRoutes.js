const express = require('express');

function vehicleRoutes(container) {
  const router = express.Router();
  const { vehicleRepositoryy } = container;
  const vehicleController = require('../controllers/vehicleController')(vehicleRepositoryy);

  router.post('/', vehicleController.create);
  router.get('/', vehicleController.getAll);
  router.get('/:id', vehicleController.getById);
  router.put('/:id', vehicleController.update);
  router.delete('/:id', vehicleController.delete);

  return router;
}

module.exports = vehicleRoutes;
