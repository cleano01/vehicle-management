const chai = require('chai');
const spies = require('chai-spies');
const { expect } = chai;

const VehicleController = require('../../../src/presentation/controllers/vehicleController');

chai.use(spies);

describe('VehicleController', () => {
  let vehicleUseCase, controller, req, res, next;

  beforeEach(() => {
    vehicleUseCase = {
      createVehicle: chai.spy(async () => 'vehicle created'),
      getAllVehicles: chai.spy(async () => 'all vehicles'),
      getVehicleById: chai.spy(async (id) => `vehicle ${id}`),
      updateVehicle: chai.spy(async (id, data) => `vehicle ${id} updated`),
      deleteVehicle: chai.spy(async (id) => `vehicle ${id} deleted`),
    };

    controller = VehicleController({ vehicleUseCase });

    req = {
      body: { licensePlate: 'ABC123', model: 'Car' },
      params: { id: '123' },
    };
    res = {
      send: chai.spy(),
    };
    next = chai.spy();
  });

  afterEach(() => {
    chai.spy.restore();
  });

  it('should call createVehicle and respond with the created vehicle', async () => {
    await controller.create(req, res, next);
    
    expect(vehicleUseCase.createVehicle).to.have.been.called.with(req.body);
    expect(res.send).to.have.been.called.with('vehicle created');
  });

  it('should call getAllVehicles and respond with all vehicles', async () => {
    await controller.getAll(req, res, next);
    
    expect(vehicleUseCase.getAllVehicles).to.have.been.called();
    expect(res.send).to.have.been.called.with('all vehicles');
  });

  it('should call getVehicleById and respond with the vehicle by ID', async () => {
    await controller.getById(req, res, next);
    
    expect(vehicleUseCase.getVehicleById).to.have.been.called.with(req.params.id);
    expect(res.send).to.have.been.called.with('vehicle 123');
  });

  it('should call updateVehicle and respond with the updated vehicle', async () => {
    await controller.update(req, res, next);
    
    expect(vehicleUseCase.updateVehicle).to.have.been.called.with(req.params.id, req.body);
    expect(res.send).to.have.been.called.with('vehicle 123 updated');
  });

  it('should call deleteVehicle and respond with the deleted vehicle', async () => {
    await controller.delete(req, res, next);
    
    expect(vehicleUseCase.deleteVehicle).to.have.been.called.with(req.params.id);
    expect(res.send).to.have.been.called.with('vehicle 123 deleted');
  });

  it('should call next with error if createVehicle throws an error', async () => {
    vehicleUseCase.createVehicle = chai.spy(async () => { throw new Error('Error creating vehicle'); });
    
    await controller.create(req, res, next);
    
    expect(next).to.have.been.called();
  });

});