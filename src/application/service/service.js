function VehicleService(context) {
  async function validateAndCreate() {
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
