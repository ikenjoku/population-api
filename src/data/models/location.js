import mongoose, { SchemaTypes } from 'mongoose';


const LocationSchema = new mongoose.Schema({
  total: {
    type: Number,
    default: 0
  },
  male: {
    type: Number,
    required: true
  },
  female: {
    type: Number,
    required: true
  },
  locations: [],
});

const Location = mongoose.model('Location', LocationSchema);

export default Location;
