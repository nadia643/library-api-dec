const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
