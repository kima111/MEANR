const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Save a reference to the Schema constructor
var schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var userSchema = new Schema({


  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: false,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: "Player"
  },
});

userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/User.js ======= NO PASSWORD PROVIDED =======");
    next();
  } else {
    console.log("models/User.js hashPassword in pre save.");
    this.password = this.hashPassword(this.password);
    next();
  }
});

// This creates our model from the above schema, using mongoose's model method
var user = mongoose.model("User", UserSchema);

// Export the User model
module.exports = user;