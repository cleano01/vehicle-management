
function vehicleUseCase({ vehicleService }) {
  
  async function createVehicle(data) {
    console.log('use case createVehicle');
    return 
  }
    
  async function getAllVehicles() {
    console.log('use case getAllVehicles');
    return 
  }

  async function getVehicleById (data) {
    return 
  }
   
  async function updateVehicle(data) {
    return;
  }

  async function deleteVehicle(data) {
    console.log('use case deleteVehicle');
    return 
  }

 
  

  return {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle
  }
}
module.exports = vehicleUseCase;

