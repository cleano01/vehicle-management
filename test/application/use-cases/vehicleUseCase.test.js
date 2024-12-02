
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = chai;

chai.use(spies);

const vehicleUseCase = require('../../../src/application/use-cases/vehicleUseCase');

describe('VehicleUseCase', () => {
  let vehicleServiceMock, vehicleUseCaseInstance;

  beforeEach(() => {
    vehicleServiceMock = {
      createVehicle: chai.spy(() => {}),
      getAllVehicles: chai.spy(() => []),
      getVehicleById: chai.spy(() => null),
      updateVehicle: chai.spy(() => {}),
      deleteVehicle: chai.spy(() => {}),
    };

    vehicleUseCaseInstance = vehicleUseCase({ vehicleService: vehicleServiceMock });
  });

  afterEach(() => {
    chai.spy.restore(vehicleServiceMock);
  });

  describe('createVehicle', () => {
    it('should call vehicleService.createVehicle with correct data', async () => {
      const dataVehicle = { licensePlate: 'ABC-1234', model: 'SUV' };

      await vehicleUseCaseInstance.createVehicle(dataVehicle);

      expect(vehicleServiceMock.createVehicle).to.have.been.called.once.with(dataVehicle);
    });

    it('should return the created vehicle', async () => {
      const dataVehicle = { licensePlate: 'ABC-1234', model: 'SUV' };
      const createdVehicle = { id: 1, ...dataVehicle };
      vehicleServiceMock.createVehicle = chai.spy(() => createdVehicle);

      const result = await vehicleUseCaseInstance.createVehicle(dataVehicle);

      expect(result).to.deep.equal(createdVehicle);
    });
  });

  describe('getAllVehicles', () => {
    it('should call vehicleService.getAllVehicles', async () => {
      await vehicleUseCaseInstance.getAllVehicles();

      expect(vehicleServiceMock.getAllVehicles).to.have.been.called.once;
    });

    it('should return a list of vehicles', async () => {
      const vehicles = [{ id: 1, licensePlate: 'XYZ-7890', model: 'Truck' }];
      vehicleServiceMock.getAllVehicles = chai.spy(() => vehicles);

      const result = await vehicleUseCaseInstance.getAllVehicles();

      expect(result).to.deep.equal(vehicles);
    });
  });

  describe('getVehicleById', () => {
    it('should call vehicleService.getVehicleById with correct id', async () => {
      const vehicleId = 123;

      await vehicleUseCaseInstance.getVehicleById(vehicleId);

      expect(vehicleServiceMock.getVehicleById).to.have.been.called.once.with(vehicleId);
    });

    it('should return the vehicle for the given id', async () => {
      const vehicle = { id: 123, licensePlate: 'GHI-3456', model: 'Hatchback' };
      vehicleServiceMock.getVehicleById = chai.spy(() => vehicle);

      const result = await vehicleUseCaseInstance.getVehicleById(123);

      expect(result).to.deep.equal(vehicle);
    });
  });

  describe('updateVehicle', () => {
    it('should call vehicleService.updateVehicle with correct id and data', async () => {
      const vehicleId = 123;
      const dataVehicle = { model: 'Convertible' };

      await vehicleUseCaseInstance.updateVehicle(vehicleId, dataVehicle);

      expect(vehicleServiceMock.updateVehicle).to.have.been.called.once.with(vehicleId, dataVehicle);
    });

    it('should return the updated vehicle', async () => {
      const vehicleId = 123;
      const dataVehicle = { model: 'Convertible' };
      const updatedVehicle = { id: vehicleId, ...dataVehicle };
      
      vehicleServiceMock.updateVehicle = chai.spy(() => updatedVehicle);

      const result = await vehicleUseCaseInstance.updateVehicle(vehicleId, dataVehicle);

      expect(result).to.deep.equal(updatedVehicle);
    });
  });

  describe('deleteVehicle', () => {
    it('should call vehicleService.deleteVehicle with correct id', async () => {
      const vehicleId = 123;

      await vehicleUseCaseInstance.deleteVehicle(vehicleId);

      expect(vehicleServiceMock.deleteVehicle).to.have.been.called.once.with(vehicleId);
    });

    it('should return the deleted vehicle', async () => {
      const vehicleId = 123;
      const deletedVehicle = { id: vehicleId };
      vehicleServiceMock.deleteVehicle = chai.spy(() => deletedVehicle);

      const result = await vehicleUseCaseInstance.deleteVehicle(vehicleId);

      expect(result).to.deep.equal(deletedVehicle);
    });
  });
});