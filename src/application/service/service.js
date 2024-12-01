function VehicleService({ vehicleRepository }) {
  async function validateAndCreate() {
    vehicleRepository.getAll()
   console.log('service.validateAndCreate')
  }

  async function validateAndUpdate() {
      console.log('service.validateAndUpdate')    
  }

  return {
    validateAndCreate,
    validateAndUpdate,
  };
}

module.exports = VehicleService;
