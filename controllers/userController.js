const db = require('../models');
const passport = require('../passport');

module.exports = {

  createUser: function(req, res){

    db.users
      .findOne({username: req.body.username}, (error, user) => {
        if(error){
          return (error);
        } else if(user){
          console.log('user already exsists');
          res.json({
            loggedIn: false,
            error: 'username already exsists'
          });
        } else{
          db.users
            .create(req.body)
            .then(dbModel => res.json({
              role: dbModel.role,
              username: dbModel.username,
              registered: true,
              loggedIn: true
            }))
            .catch(error => res.status(422).json(error));
        }
      });
  },


  findUser: function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    db.users
      .findOne({username}, (error, user) => {
        if(error){
          return (error);
        }
        if(!user){
          console.log('Incorrect username');
          res.json({loggedIn: false});
          return (null, false);

        } else if(!user.checkPassword(password)){
          console.log('Incorrect password');
          res.json({loggedIn: false});
          return (null, false);
        }
        return (user);
      })
      .then(dbModel => res.json({
        role: dbModel.role,
        username: dbModel.username,
        loggedIn: true
      }))
      .catch(error => res.status(422).json(error));
  },

  findAllUsers: function(req, res){
    console.log(req.body);
    if(req.isAuthenticated()){
      console.log('authenticated');
    } else{
      res.redirect('/');
    }
    db.users
      .find(req.query)
      .then(dbModel => {
        const arr = [];

        for(i=0;i<dbModel.length;i++){
          if(dbModel[i].role === 'user'){
            var obj = {};
            obj.firstName = dbModel[i].firstName;
            obj.lastName = dbModel[i].lastName;
            obj.email = dbModel[i].email;
            arr.push(obj);
          }
        }

        res.send(arr);
      })
      .catch(error => res.status(422).json(error));
  },

  authenticateUser: function(req, res, next) {
    passport.authenticate('local', function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({loggedIn: false});
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.json({
          username: user.username,
          role: user.role,
          loggedIn: true
        });
      });
    })(req, res, next);
  },
  logoutUser: function(req, res) {
    if (req.user) {
      req.logout();
      res.json({ message: 'Logging out' });
    } else {
      res.json({ message: 'No user to log out' });
    }
  }

};