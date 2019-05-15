import mongoose, { SchemaTypes } from 'mongoose';


const LocationSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true
  },
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

LocationSchema.pre('save', function(next){
  const location = this;
  location.total = location.male + location.female;
  next();
});

const Location = mongoose.model('Location', LocationSchema);

export default Location;
