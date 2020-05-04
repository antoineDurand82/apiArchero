const db = require("../models");
const UserLocket = db.userLocket;

exports.findAll = (req, res) => {
  UserLocket.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userLockets."
      });
    });
};