const db = require("../models");
const UserHero = db.userHero;

exports.findAll = (req, res) => {
  UserHero.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userHeroes."
      });
    });
};