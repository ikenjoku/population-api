import mongoose from 'mongoose';

const SubLocationSchema = new mongoose.Schema({
  total: Number,
  male: {
    type: Number,
    required: true
  },
  female: {
    type: Number,
    required: true
  },
  isSubLocation: {
    type: Boolean,
    default: false
  }
});

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
  subLocations: [SubLocationSchema],
});

const Location = mongoose.model('Location', LocationSchema);

export default Location;
