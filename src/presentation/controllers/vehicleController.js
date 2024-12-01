function VehicleController({ vehicleUseCase }) {

  return {
    async create(req, res) {     
      console.log('controller create');     
    },

    async getAll(req, res) {
      await vehicleUseCase.getAllVehicles()
      return {}
    },

    async getById(req, res) {
      console.log('controller getById')

    },

    async update(req, res) {      
      console.log('controller getById');        
    },

    async delete(req, res) {
      console.log('controller getById');
     
    },
  };
}

module.exports = VehicleController;
