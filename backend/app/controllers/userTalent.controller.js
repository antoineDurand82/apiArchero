const db = require("../models");
const UserTalent = db.userTalent;

exports.findAll = (req, res) => {
  UserTalent.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userTalents."
      });
    });
};