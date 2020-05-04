const db = require("../models");
const UserPet = db.userPet;

exports.findAll = (req, res) => {
  UserPet.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userPets."
      });
    });
};