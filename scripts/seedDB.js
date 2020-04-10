const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require("bcryptjs");

mongoose.connect("mongodb://user:password1@ds239206.mlab.com:39206/heroku_hd01s5rq");


db.users
.remove({})