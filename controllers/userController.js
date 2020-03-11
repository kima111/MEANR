const db = require("../models");

// Defining methods for the userController
module.exports = {
  createUser: function(req, res) {
      console.log(req)
    db.users
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(error => res.status(422).json(error));

  },
  findUser: function(req, res){
    console.log(JSON.stringify(req.body.username) + " ROAR")
    
    db.users
        .findOne({username: req.body.username}, (error, user) => {
            if(error){
                console.log("ERROR")
            }
            if(!user){
                console.log("Incorrect username")
            }
            return console.log("YO")
        })
        // .then(dbModel => res.json(dbModel))
        // .catch(error => res.status(422).json(error));

  }
}