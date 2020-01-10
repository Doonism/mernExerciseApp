const mongoose = require('mongoose');

//accessing the mongoose Schema
const Schema = mongoose.Schema;

//define a Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

//define a model
const User = mongoose.model('User', userSchema);

//export our model
module.exports = User;