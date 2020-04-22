const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: 'user'
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

userSchema.pre('save', function(next) {
  if (!this.password) {
    console.log('No Password Provided');
    next();
  } else {
    console.log('Saved User with hashed Password');
    this.password = this.hashPassword(this.password);
    next();
  }
});

// // This creates our model from the above schema, using mongoose's model method
const users = mongoose.model('User', userSchema);

// Export the User model
module.exports = users;