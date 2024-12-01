// src/application/services/vehicleService.js

function VehicleService(vehicleRepositoryy) {
  async function validateAndCreate(vehicle) {
    // Validação de lógica de negócios
   console.log('service.validateAndCreate')
  }

  async function validateAndUpdate(id, data) {
      console.log('service.validateAndUpdate')    
  }

  return {
    validateAndCreate,
    validateAndUpdate,
  };
}

module.exports = VehicleService;
