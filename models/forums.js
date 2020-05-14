const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  forumText: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
});

// // This creates our model from the above schema, using mongoose's model method
const forums = mongoose.model('Forums', forumSchema);

// Export the User model
module.exports = forums;