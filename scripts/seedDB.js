const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require("bcryptjs");

mongoose.connect(process.env.MONGO_DB_NAME || "mongodb://localhost/" + process.env.MONGO_DB_NAME);


db.users
.remove({})