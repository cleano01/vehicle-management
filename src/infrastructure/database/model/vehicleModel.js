const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const VehicleSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4(), 
  },
  licensePlate: { type: String, required: true },
  chassis: { type: String, required: true },
  renavam: { type: String, required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true },
}, {
  timestamps: true,
});

const VehicleModel = mongoose.model('VehicleModel', VehicleSchema);

module.exports = VehicleModel;


