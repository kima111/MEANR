const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require("bcryptjs");

mongoose.connect(process.env.MONGO_DB_NAME || "mongodb://user:password1@ds021434.mlab.com:21434/heroku_tvcf55j4");


db.users
.remove({})