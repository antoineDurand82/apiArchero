const db = require("../models");
const UserRing = db.userRing;

exports.findAll = (req, res) => {
  UserRing.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user rings."
      });
    });
};