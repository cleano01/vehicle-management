
function vehicleUseCase({ vehicleRepository }) {
  async function getAllVehicles() {
    console.log('use case getAllVehicles');
    vehicleRepository.getAll();
    return 
  }
  

  return {
    getAllVehicles,
  };
}

module.exports = vehicleUseCase;

