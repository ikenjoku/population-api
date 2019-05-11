import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  total: Number,
  male: {
    type: Number,
    required: true
  },
  female: {
    type: Number,
    required: true
  },
  subLocations: [LocationSchema],
  isSubLocation: {
    type: Boolean,
    default: false
  }
});

const Location = mongoose.model('Location', LocationSchema);

export default Location;
