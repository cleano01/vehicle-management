const createVehicle = require('../../application/use-cases/createVehicle');
const getAllVehicles = require('../../application/use-cases/getAllVehicles');
const getVehicleById = require('../../application/use-cases/getVehicleById');
const updateVehicle = require('../../application/use-cases/updateVehicle');
const deleteVehicle = require('../../application/use-cases/deleteVehicle');

function VehicleController(vehicleRepositoryy) {
  return {
    async create(req, res) {
     
      const vehicle = await createVehicle(vehicleRepositoryy, req.body);
      console.log('controller create')

      
    },

    async getAll(req, res) {
      const vehicles = await getAllVehicles(vehicleRepositoryy);
      console.log('controller getAll')

    },

    async getById(req, res) {
      const vehicle = await getVehicleById(vehicleRepositoryy, req.params.id);
      console.log('controller getById')

    },

    async update(req, res) {
      
      const vehicle = await updateVehicle(vehicleRepositoryy, req.params.id, req.body);
      console.log('controller getById');
        
    },

    async delete(req, res) {
      const success = await deleteVehicle(vehicleRepositoryy, req.params.id);
      console.log('controller getById');

     
    },
  };
}

module.exports = VehicleController;
