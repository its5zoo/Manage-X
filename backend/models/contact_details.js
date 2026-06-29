const mongoose = require('mongoose');

const contactdetailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneno: String,
  city: String,
  address: String
});

module.exports = mongoose.model('Contact', contactdetailsSchema);