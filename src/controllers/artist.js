const Artist = require('../models/artist');

exports.create = (req, res) => {
  const artist = new Artist({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  user.save().then(() => {
    res.status(201).json(user);
  });
};

