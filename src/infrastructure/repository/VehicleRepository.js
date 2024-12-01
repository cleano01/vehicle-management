function VehicleRepository() {
  async function create(vehicle) {
    console.log(' VehicleRepository create ');
    return 
  };

  async function getAll() {
    console.log(' VehicleRepository getAll ');
    return 
  };

  async function getById(id) {
    console.log(' VehicleRepository getById ');
    return 
  };

  async function update(id, vehicle) {
    console.log(' VehicleRepository update');
    return 
  };

  async function deleteById(id) {
    console.log(' VehicleRepository deleteById');
    return 
  };


  return {
    create,
    getAll,
    getById,
    update,
    deleteById,
  };
  
}

module.exports = VehicleRepository;