const db = require("../models");
// const bcrypt = require('bcryptjs');
// const localStrategy = require("passport-local").Strategy;
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
// Defining methods for the userController
module.exports = {
    
  createUser: function(req, res) {
    db.users
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(error => res.status(422).json(error));

  },

  findUser: function(req, res){

    const password = req.body.password;
    db.users
        .findOne({username: req.body.username}, (error, user) => {
            if(error){
                return (error);
            }
            if(!user){
                console.log("Incorrect username")
                res.json(null)
                return (null, false);
                
            }
            else if(!user.checkPassword(password)){
                console.log("Incorrect password")
                res.json(null)
                return (null, false);
            }
            return (user + console.log("user authenticated"))
        })
        .then(dbModel => res.json(dbModel))
        .catch(error => res.status(422).json(error))

    }
//  authenticateUser: function(req, res){

   
//  passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.checkPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   ));
//  }
}