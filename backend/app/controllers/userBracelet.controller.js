const db = require("../models");
const UserBracelet = db.userBracelet;

exports.findAll = (req, res) => {
  UserBracelet.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userBracelets."
      });
    });
};