import Location from '../../data/models/location';

class LocationController {
  static createLocation(req, res, next) {
    const { male, female } = req.body;
    if (!male || !female) {
      const err = new Error('Please specify the number of male and female citizens');
      err.status = 400;
      next(err);
    } else {
      const newLocation= new Location({ male, female });
      newLocation.save((err, location) => {
        if (err) return next(err);
        return res.status(201).json({
          message: 'New Located has been created',
          location
        });
      });
    }
  }

  static createSublocation(req, res, next) {
    return res.status(201).json({
      message: 'createSublocation',
    });
  }

  static getLocations(req, res, next) {
    return res.status(201).json({
      message: 'get Locations',
    });
  }

  static updateLocation(req, res, next) {
    return res.status(201).json({
      message: 'update Locations',
    });
  }

  static deleteLocation(req, res, next) {
    return res.status(201).json({
      message: 'delete Locations',
    });
  }
}
export default LocationController;
