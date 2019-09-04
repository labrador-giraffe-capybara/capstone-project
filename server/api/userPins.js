const userPinsRouter = require('express').Router();

const UserPin = require('../db/models/userPin');

userPinsRouter.post('/', async(req, res, next) => {
  try {
    const newPin = await UserPin.create({
      location: {
        type: 'Point',
        coordinates: [req.body.coordinate.latitude,
        req.body.coordinate.longitude]
      },
      name: req.body.title,
      description: req.body.description
    })
    res.send(newPin);
  }
  catch(err) {
    next(err);
  }
})

userPinsRouter.get('/', async(req, res, next) => {
  try {
    const allUserPins = await UserPin.findAll();
    res.send(allUserPins);
  } catch(err) {
    next(err);
  }
});

module.exports = userPinsRouter;
