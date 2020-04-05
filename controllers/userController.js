const db = require("../models");
// const bcrypt = require('bcryptjs');
// const localStrategy = require("passport-local").Strategy;
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
// Defining methods for the userController
module.exports = {
    createUser: function(req, res){

        db.users
            .findOne({username: req.body.username}, (error, user) => {
                if(error){
                    return (error);
                }
                else if(user){
                    console.log("user already exsists")
                    res.json({
                        loggedIn: false,
                        error: "username already exsists"
                    })
                }
                else{
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
            })
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
                res.json({loggedIn: false})
                return (null, false);
                
            }
            else if(!user.checkPassword(password)){
                console.log("Incorrect password")
                res.json({loggedIn: false})
                return (null, false);
            }
            return (user)
        })
        .then(dbModel => res.json({
            role: dbModel.role,
            username: dbModel.username,
            loggedIn: true
        }))
        .catch(error => res.status(422).json(error))

    },

    findAllUsers: function(req, res){
        db.users
        .find(req.query)
        .then(dbModel => { 
            const arr = []
            
            for(i=0;i<dbModel.length;i++){
                if(dbModel[i].role === "user"){
                    var obj = {}
                    obj["firstName"] = dbModel[i].firstName
                    obj["lastName"] = dbModel[i].lastName 
                    obj["email"] = dbModel[i].email 
                    arr.push(obj)
                }
            }
           
            res.send(arr)
        })
        .catch(error => res.status(422).json(error))
    }
}