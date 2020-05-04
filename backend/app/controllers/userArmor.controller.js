const db = require("../models");
const UserArmor = db.userArmor;

exports.findAll = (req, res) => {
  UserArmor.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userArmors."
      });
    });
};