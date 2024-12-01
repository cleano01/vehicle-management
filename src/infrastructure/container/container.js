const { createContainer, asFunction, asValue, asClass } = require("awilix");

const VehicleRepository = require("../../infrastructure/repository/VehicleRepository");
const VehicleService = require("../../application/service/service");
const VehicleUseCase = require("../../application/use-cases/vehicleUseCase");
const VehicleController = require("../../presentation/controllers/vehicleController");
const DataBaseConnection =  require('../database/dataBaseConnection');
const container = createContainer();


container.register({
  dataBaseConnection: asFunction(DataBaseConnection).singleton(),
  vehicleRepository: asFunction(VehicleRepository).singleton(),
  vehicleService: asFunction(VehicleService).singleton(),
  vehicleUseCase: asFunction(VehicleUseCase).singleton(),
  vehicleController: asFunction(VehicleController).singleton(),
});

module.exports = container;






