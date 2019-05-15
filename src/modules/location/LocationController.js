import Location from '../../data/models/location';

class LocationController {
  static createLocation(req, res, next) {
    const { male, female, area } = req.body;
    if (!male || !female || !area) {
      const err = new Error('Please specify the number of male and female citizens in the area');
      err.status = 400;
      next(err);
    } else {
      const newLocation= new Location({ area, male, female });
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
    const { male, female } = req.body;
    req.location.male += male;
    req.location.female += female;
    req.location.locations.push(req.body);
  req.location.save(function(err, location){
    if (err) return next(err);
    res.status(201).json(location);
  })
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
