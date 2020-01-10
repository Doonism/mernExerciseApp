const mongoose = require('mongoose');

//
const Schema = mongoose.Schema;

//define our Schema
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

//Model is a subclass of mongoose model
const Exercise = mongoose.model('Exercise', exerciseSchema);

//Export our model
module.exports = Exercise;