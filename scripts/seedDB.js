const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/' + process.env.MONGO_DB_NAME);


db.users
  .remove({});