const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  total: Number,
  male: Number,
  female: Number,
  subLocations: [LocationSchema],
  isSubLocation: {
    type: Boolean,
    default: false
  }
});

const Location = mongoose.model('Location', LocationSchema);

export default Location;
