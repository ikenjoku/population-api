export default (req, res, next) => {
  const { male, female } = req.body;
  if(male && typeof parseInt(male, 10) === NaN || female && typeof parseInt(female, 10) === NaN){
    const err = new Error('Please number values for male and female citizens');
    err.status = 400;
    next(err);
  }
  male && (req.body.male = parseInt(male, 10));
  female && (req.body.female = parseInt(female, 10));
  return next();
};