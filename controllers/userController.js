const db = require("../models");

// Defining methods for the userController
module.exports = {
  createUser: function(req, res) {
    db.users
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(error => res.status(422).json(error));

  },
//   findUser: function(req, res){
//     console.log(req + "OVERHERE")
//     db.users
//         .findOne(req.body.username)
//         .then(dbModel => res.json(dbModel))
//         .catch(error => res.status(422).json(error));

//   }
}