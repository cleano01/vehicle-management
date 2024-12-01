
function vehicleUseCase({ vehicleService }) {
  
  async function createVehicle(dataVehicle) {
    const vehicle = await vehicleService.createVehicle(dataVehicle)
    
    return vehicle;
  }
    
  async function getAllVehicles() {
    const vehicles = await vehicleService.getAllVehicles()
    
    return vehicles;
  }

  async function getVehicleById (vehicleId) {
    const vehicle = await vehicleService.getVehicleById(vehicleId);    
    return vehicle; 
  }
   
  async function updateVehicle(id, dataVehicle) {
    const vehicle = await vehicleService.updateVehicle(id, dataVehicle);    

    return vehicle;
  }

  async function deleteVehicle(vehicleId) {
    const vehicle = await vehicleService.deleteVehicle(vehicleId);    
    
    return vehicle;
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

