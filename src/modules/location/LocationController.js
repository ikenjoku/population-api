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
          message: 'A new location has been created',
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

  static getAllLocations(req, res, next) {
    Location.find({}, null, {sort: {area: -1}}, function(err, locations){
      if(err) return next(err);
      res.status(200).json({
        message: 'All Locations',
        locations
      });
    });
  }

  static getLocation(req, res, next) {
    return res.status(200).json({
      message: 'Successfully retreived location',
      location: req.location
    });
  }

  static summarizeLocationData (req, res, next) {
    Location.find({})
    .sort({createdAt: -1})
    .exec(function(err, locations){
        if(err) return next(err);
        let male = 0;
        let female = 0;
        let total = 0;
        locations.forEach(location => {
          male += location.male;
          female += location.female;
          total += location.total;
        });
        return res.status(200).json({
          count: `${locations.length} Locations`,
          total,
          male,
          female,
        });
    });
  }

  static updateLocation(req, res, next) {
    req.location.update(req.body, (err, result) => {
      if (err) return next(err);
      return res.status(200).json({
        message: 'Successfully updated location',
        location: result
      });
    });
  }

  static deleteLocation(req, res, next) {
    req.location.remove(function(err){
      if (err) return next(err);
      res.status(200).json({message: "Successfully removed"});
    })
  }
}
export default LocationController;
