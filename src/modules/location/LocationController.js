import Location from '../../data/models/location';

class LocationController {
  static createLocation(req, res, next) {
    return res.status(201).json({
      message: 'create Locations',
    });
  }

  static getLocations(req, res, next) {
    return res.status(201).json({
      message: 'get Locations',
    });
}
}
export default LocationController;
