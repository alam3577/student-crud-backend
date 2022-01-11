const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    maxlength: 5,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
