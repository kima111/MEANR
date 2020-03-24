const db = require("../models");

// Defining methods for the userController
module.exports = {
    createForum: function(req, res){
        db.forums    
            .create(req.body)
            .then(dbModel => res.json({}))
            .catch(error => res.status(422).json(error));
    },
    getForums: function(req, res){
        db.forums    
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error));
    }
    // findById: function(req, res){
    //     db.forums
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(error => res.status(422).json(error))
    // },
    // update: function(req, res){
    //     db.forums  
    //         .findOneAndUpdate({ _id: req.params.id}, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(error => res.status(422).json(error));
    // },
    // remove: function(req, res){
    //     db.forums
    //         .findById({ _id: req.params.id})
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(error => res.status(422).json(error));
    // }
}