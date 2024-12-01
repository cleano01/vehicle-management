function VehicleService({ vehicleRepository }) {
 
  async function createVehicle(dataVehicle) {
    const vehicle = await vehicleRepository.getByLicensePlate(dataVehicle.licensePlate)
    
    if (vehicle) {
      throw new Error('Vehicle with this license plate already exists.');
    }

    return await vehicleRepository.create(dataVehicle);
  }

  async function getAllVehicles() {
    const vehicles = await vehicleRepository.getAll();
    return  vehicles;
  }

  async function getVehicleById(vehicleId) {
    return await vehicleRepository.getById(vehicleId);
  }

  async function updateVehicle(vehicleId, dataVehicle) {
    const vehicle = await vehicleRepository.getById(vehicleId, dataVehicle);
    
    if (!vehicle) throw new Error('Vehicle not found.');
    
    return await vehicleRepository.update(vehicleId, dataVehicle);
  }

  async function deleteVehicle(vehicleId) {
    const vehicle = await vehicleRepository.getById(vehicleId);
    
    if (!vehicle) throw new Error('Vehicle not found.');
    
    return await vehicleRepository.deleteById(vehicleId);
  }

  return {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle,
  };
}

module.exports = VehicleService;
