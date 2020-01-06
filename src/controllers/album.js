const Album = require('../models/album');

exports.create = (req, res) => {
  const album = new Album({
    name: req.body.name,
    year: req.body.year,
    artist: req.params.id,
  });
  if (!album.artist) {
    res.status(404).json({ error: 'The artist could not be found' });
  } else {
    album.save().then(() => {
      res.status(201).json(album);
    });
  }
};
