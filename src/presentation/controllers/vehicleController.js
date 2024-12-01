function VehicleController({ vehicleUseCase }) {

  return {
    async create(req, res, next) { 
      try {
        const response = await vehicleUseCase.createVehicle(req.body)   
      
      return res.send(response);
      } catch (error) {
        next(error);
      }
      
    },

    async getAll(req, res, next) {
      try {
        const response = await vehicleUseCase.getAllVehicles()
      
        return res.send(response);
      } catch (error) {
        next(error);
      }     
    },

    async getById(req, res, next) {
      try {
        const vehicleId = req.params.id;

        const response = await vehicleUseCase.getVehicleById(vehicleId)
      
        return res.send(response);
      } catch (error) {
        next(error);
      }
      
    },

    async update(req, res, next) { 
      try {
        const vehicleId = req.params.id;
     
        const response = await vehicleUseCase.updateVehicle(vehicleId, req.body);
      
        return res.send(response); 
      } catch (error) {
        next(error);
      }           
    },

    async delete(req, res, next) {
      try {
        const vehicleId = req.params.id;
     
        const response = await vehicleUseCase.deleteVehicle(vehicleId)
      
        return res.send(response); 
      } catch (error) {
        next(error);
      }     
    },
  };
}

module.exports = VehicleController;
