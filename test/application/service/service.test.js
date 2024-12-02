const chai = require('chai');
const spies = require('chai-spies');
const { expect } = chai;

chai.use(spies);

const VehicleService = require('../../../src/application/service/service');

let vehicleRepositoryMock, vehicleService;

  beforeEach(() => {
    vehicleRepositoryMock = {
      create: chai.spy(() => {}),
      getByLicensePlate: chai.spy(() => null),
      getAll: chai.spy(() => []),
      getById: chai.spy(() => null),
      update: chai.spy(() => {}),
      deleteById: chai.spy(() => {}),
    };

    vehicleService = VehicleService({ vehicleRepository: vehicleRepositoryMock });
  });

  afterEach(() => {
    chai.spy.restore(vehicleRepositoryMock);
  });

  describe('createVehicle', () => {
    beforeEach(() => {
      vehicleRepositoryMock.getByLicensePlate = chai.spy(() => ({ id: 1 }));
    });

    it('should throw an error if a vehicle with the given license plate already exists', async () => {
      const dataVehicle = { licensePlate: 'ABC-1234', model: 'Sedan' };

      try {
        await vehicleService.createVehicle(dataVehicle);
        
        throw new Error('another error');

      } catch (error) {
        expect(error.message).to.equal('Vehicle with this license plate already exists.');
        expect(error.status).to.equal(422);
      }

      expect(vehicleRepositoryMock.getByLicensePlate).to.have.been.called.with('ABC-1234');
      expect(vehicleRepositoryMock.create).to.not.have.been.called();
    });

    it('should create a vehicle if no vehicle exists with the given license plate', async () => {
      vehicleRepositoryMock.create = chai.spy(() => ({ licensePlate: 'DEF-5678', model: 'SUV' }));
      vehicleRepositoryMock.getByLicensePlate = chai.spy(() => null);


      const dataVehicle = { licensePlate: 'DEF-5678', model: 'SUV' };

      await vehicleService.createVehicle(dataVehicle);

      expect(vehicleRepositoryMock.getByLicensePlate).to.have.been.called.with('DEF-5678');
      expect(vehicleRepositoryMock.create).to.have.been.called.with(dataVehicle);
    });
  });

  describe('getAllVehicles', () => {
    it('should throw an error if no vehicles are found', async () => {
      vehicleRepositoryMock.getAll = chai.spy(() => null);

      try {
        await vehicleService.getAllVehicles();
        throw new Error('another error');
      } catch (error) {
        expect(error.message).to.equal('Vehicle not found.');
        expect(error.status).to.equal(404);
      }

      expect(vehicleRepositoryMock.getAll).to.have.been.called();
    });

    it('should return a list of vehicles if they exist', async () => {
      const vehicles = [{ id: 1, licensePlate: 'XYZ-7890', model: 'Truck' }];
      vehicleRepositoryMock.getAll = chai.spy(() => vehicles);

      const result = await vehicleService.getAllVehicles();

      expect(result).to.deep.equal(vehicles);
      expect(vehicleRepositoryMock.getAll).to.have.been.called();
    });
  });

  describe('getVehicleById', () => {
    it('should throw an error if the vehicle does not exist', async () => {
      const vehicleId = 123;

      try {
        await vehicleService.getVehicleById(vehicleId);

        throw new Error('another error');
      } catch (error) {
        expect(error.message).to.equal('Vehicle not found.');
        expect(error.status).to.equal(404);
      }

      expect(vehicleRepositoryMock.getById).to.have.been.called.with(vehicleId);
    });

    it('should return the vehicle if it exists', async () => {
      const vehicle = { id: 123, licensePlate: 'GHI-3456', model: 'Hatchback' };
      vehicleRepositoryMock.getById = chai.spy(() => vehicle);

      const result = await vehicleService.getVehicleById(123);

      expect(result).to.deep.equal(vehicle);
      expect(vehicleRepositoryMock.getById).to.have.been.called.with(123);
    });
  });

  describe('updateVehicle', () => {
    it('should throw an error if the vehicle does not exist', async () => {
      const vehicleId = 123;
      const dataVehicle = { model: 'Convertible' };

      try {
        await vehicleService.updateVehicle(vehicleId, dataVehicle);
        throw new Error('another error');
      } catch (error) {
        expect(error.message).to.equal('Vehicle not found.');
        expect(error.status).to.equal(404);
      }

      expect(vehicleRepositoryMock.getById).to.have.been.called.with(vehicleId);
      expect(vehicleRepositoryMock.update).to.not.have.been.called();
    });

    it('should update the vehicle if it exists', async () => {
      const vehicleId = 123;
      const dataVehicle = { model: 'Convertible' };
      
      vehicleRepositoryMock.getById = chai.spy(() => ({ id: vehicleId }));

      await vehicleService.updateVehicle(vehicleId, dataVehicle);

      expect(vehicleRepositoryMock.getById).to.have.been.called.with(vehicleId);
      expect(vehicleRepositoryMock.update).to.have.been.called.with(vehicleId, dataVehicle);
    });
  });

  describe('deleteVehicle', () => {
    it('should throw an error if the vehicle does not exist', async () => {
      const vehicleId = 123;

      try {
        await vehicleService.deleteVehicle(vehicleId);
        
        throw new Error('another error.');
      } catch (error) {
        expect(error.message).to.equal('Vehicle not found.');
        expect(error.status).to.equal(404);
      }

      expect(vehicleRepositoryMock.getById).to.have.been.called.with(vehicleId);
      expect(vehicleRepositoryMock.deleteById).to.not.have.been.called();
    });

    it('should delete the vehicle if it exists', async () => {
      const vehicleId = 123;
      vehicleRepositoryMock.getById = chai.spy(() => ({ id: vehicleId }));

      await vehicleService.deleteVehicle(vehicleId);

      expect(vehicleRepositoryMock.getById).to.have.been.called.with(vehicleId);
      expect(vehicleRepositoryMock.deleteById).to.have.been.called.with(vehicleId);
    });
});
