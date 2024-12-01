function VehicleController({ vehicleUseCase }) {

  return {
    async create(req, res) { 
      const response = await vehicleUseCase.createVehicle(req.body)   
      
      return res.send(response);
    },

    async getAll(req, res) {
      const response = await vehicleUseCase.getAllVehicles()
      
      return res.send(response);
    },

    async getById(req, res) {
      const vehicleId = req.params.id;

      const response = await vehicleUseCase.getVehicleById(vehicleId)
      
      return res.send(response);
    },

    async update(req, res) { 
      const vehicleId = req.params.id;
     
      const response = await vehicleUseCase.updateVehicle(vehicleId, req.body)
      
      return res.send(response);      
    },

    async delete(req, res) {
      const vehicleId = req.params.id;
     
      const response = await vehicleUseCase.deleteVehicle(vehicleId)
      
      return res.send(response); 
     
    },
  };
}

module.exports = VehicleController;
