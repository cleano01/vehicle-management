function VehicleService({ vehicleRepository }) {
 
  async function createVehicle(dataVehicle) {
    const vehicle = await vehicleRepository.getByLicensePlate(dataVehicle.licensePlate)
    
    if (vehicle) {
      const error = new Error('Vehicle with this license plate already exists.');
      error.status = 422;
      throw error;
    }

    return await vehicleRepository.create(dataVehicle)
  }

  async function getAllVehicles() {
    const vehicles = await vehicleRepository.getAll();
     
    if (!vehicles) {       
      const error = new Error('Vehicle not found.'); 
      error.status = 404;
      throw error;
    };
    return  vehicles;
  }

  async function getVehicleById(vehicleId) {
    const vehicle = await vehicleRepository.getById(vehicleId);

    if (!vehicle) {       
      const error = new Error('Vehicle not found.'); 
      error.status = 404;
      throw error;
    };
    
    return vehicle;    
  }

  async function updateVehicle(vehicleId, dataVehicle) {
    const vehicle = await vehicleRepository.getById(vehicleId, dataVehicle);
    
    if (!vehicle) {       
      const error = new Error('Vehicle not found.'); 
      error.status = 404;
      throw error;
    };
    
    return await vehicleRepository.update(vehicleId, dataVehicle);    
  }

  async function deleteVehicle(vehicleId) {   
    
      const vehicle = await vehicleRepository.getById(vehicleId);
    
      if (!vehicle) {       
        const error = new Error('Vehicle not found.'); 
        error.status = 404;
        throw error;
      };
    
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
