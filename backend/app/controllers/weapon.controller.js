const db = require("../models");
const Weapon = db.weapon;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.fullName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Weapon
  const weapon = {
    fullName: req.body.fullName,
    attack: req.body.attack,
    attackSpeed: req.body.attackSpeed,
    rareBuff: req.body.rareBuff,
    epicBuff: req.body.epicBuff,
    perfectEpicBuff: req.body.perfectEpicBuff,
    legendaryBuff: req.body.legendaryBuff,
    ancientLegendaryBuff: req.body.ancientLegendaryBuff,
    linkImage: req.body.linkImage,
  };

  // Save Weapon in the database
  Weapon.create(weapon)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Weapon."
      });
    });
};

exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.like]: `%${fullName}%` } } : null;

  Weapon.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving weapons."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Weapon.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Weapon with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  Weapon.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Weapon was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Weapon with id=${id}. Maybe Weapon was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Weapon with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Weapon.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Weapon was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Weapon with id=${id}. Maybe Weapon was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Weapon with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Weapon.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all weapons."
      });
    });
  
};