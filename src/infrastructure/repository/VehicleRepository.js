const Vehicle = require('../database/model/vehicleModel');

function VehicleRepository({}) {
  async function create(vehicle) {
    const newVehicle = new Vehicle(vehicle);

    await newVehicle.save();

    return newVehicle;
  };

  async function getAll() {
    const vehicle = await Vehicle.find({});

    return vehicle
  };

  async function getById(id) {
    const vehicle = await Vehicle.findById(id);
    return vehicle;
  }

  async function update(id, vehicle) {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, vehicle, {
      new: true,
    });

    return updatedVehicle;
  };

  async function deleteById(id) {
    const deletedVehicle = await Vehicle.findByIdAndDelete(id);

    return deletedVehicle;
  };

  return {
    create,
    getAll,
    getById,
    update,
    deleteById,
  };
  
}

module.exports = VehicleRepository;