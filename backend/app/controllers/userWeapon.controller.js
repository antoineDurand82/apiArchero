const db = require("../models");
const UserWeapon = db.userWeapon;

exports.findAll = (req, res) => {
  UserWeapon.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userWeapons."
      });
    });
};