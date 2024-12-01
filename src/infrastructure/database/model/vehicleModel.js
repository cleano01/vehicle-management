const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  
});

const VehicleModel = mongoose.model('VehicleModel', VehicleSchema);

module.exports = VehicleModel;


