const { createContainer, asFunction } = require("awilix");

const VehicleRepository = require("../../infrastructure/repository/VehicleRepository");
const VehicleService = require("../../application/service/service");
const VehicleUseCase = require("../../application/use-cases/vehicleUseCase");
const VehicleController = require("../../presentation/controllers/vehicleController");

const container = createContainer();

container.register({
  vehicleRepository: asFunction(VehicleRepository).singleton(),
  vehicleService: asFunction(VehicleService).singleton(),
  vehicleUseCase: asFunction(VehicleUseCase).singleton(),
  vehicleController: asFunction(VehicleController).singleton(),
});

module.exports = container;






