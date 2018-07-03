const db = require("../models");

// Defining methods for the usersController.
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneAndUpdateGoogle: function(req,res) {
    db.google_account
      .findOneAndUpdate({googleId: req.body.googleId}, req.body, {upsert: true})
      .then(dbModel => {res.json(dbModel)})
      .catch(err=>{res.status(422).json(err)});
  },
  findOneAndUpdateLocal: function (req, res) {
    db.Users
      .findByIdAndUpdate({email: req.body.email}, req.body, {upsert: true})
      .then(dbModel => {res.json(dbModel)})
      .catch(err=>{res.status(422).json(err)});
  },
  findById: function(req, res) {
    db.Users
      .findOne({_id: req.params.id}) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.Users
      .findByEmail(req.params.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
