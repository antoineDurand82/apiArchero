const db = require("../models");
const Armor = db.armor;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.fullName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const armor = {
    fullName: req.body.fullName,
    maxHp: req.body.maxHp,
    commonBuff: req.body.commonBuff,
    rareBuff: req.body.rareBuff,
    epicBuff: req.body.epicBuff,
    perfectEpicBuff: req.body.perfectEpicBuff,
    legendaryBuff: req.body.legendaryBuff,
    ancientLegendaryBuff: req.body.ancientLegendaryBuff,
    linkImage: req.body.linkImage,
  };

  // Save Armor in the database
  Armor.create(armor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Armor."
      });
    });
};

exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.like]: `%${fullName}%` } } : null;

  Armor.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving armors."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Armor.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Armor with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  Armor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Armor was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Armor with id=${id}. Maybe Armor was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Armor with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Armor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Armor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Armor with id=${id}. Maybe Armor was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Armor with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Armor.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all armors."
      });
    });
  
};

exports.findAllPublished = (req, res) => {
  Armor.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving armors."
    });
  });
  
};