import Location from '../data/models/location';


export default (req, res,next, id) => {
  Location.findById(id, function(err, location){
    if(err) return next(err);
    if(!location){
      const err = new Error("Location not found");
      err.status = 404;
      return next(err);
    }
    req.location = location;
    return next();
  });
};
