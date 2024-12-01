// src/infrastructure/di/container.js
const vehicleRepository = require('../persistence/vehicleRepositor');
//const vehicleRepository = require('../persistence/databasevehicleRepository');
const VehicleService = require('../../application/service/service');
const createVehicle = require('../../application/use-cases/createVehicle');
const getAllVehicles = require('../../application/use-cases/getAllVehicles');
const updateVehicle = require('../../application/use-cases/updateVehicle');
const deleteVehicle = require('../../application/use-cases/deleteVehicle');

function createContainer(databaseConfig = null) {
  //let vehicleRepositoryy;
  /*
  if (databaseConfig) {
    vehicleRepositoryy = DatabasevehicleRepository(databaseConfig);
  } else {
    vehicleRepositoryy = FilevehicleRepositoryy();
  }
  */

  const vehicleService = VehicleService(vehicleRepository);

  const useCases = {
    createVehicle: (data) => createVehicle({ vehicleService, data }),
    getAllVehicles: () => getAllVehicles({ vehicleService, vehicleRepository }),
    updateVehicle: (id, data) => updateVehicle({ vehicleService, id, data }),
    deleteVehicle: (id) => deleteVehicle({ vehicleService, vehicleRepository, id }),
  };

  return {
    vehicleRepository,
    vehicleService,
    useCases,
  };
}

module.exports = createContainer;
