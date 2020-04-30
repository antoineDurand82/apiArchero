const db = require("../models");
const Pet = db.pet;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.fullName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const pet = {
    fullName: req.body.fullName,
    level: req.body.level,
    rarity: req.body.rarity,
    commonBuff: req.body.commonBuff,
    rareBuff: req.body.rareBuff,
    epicBuff: req.body.epicBuff,
    perfectEpicBuff: req.body.perfectEpicBuff,
    legendaryBuff: req.body.legendaryBuff,
    ancientLegendaryBuff: req.body.ancientLegendaryBuff,
    linkImage: req.body.linkImage,
  };

  // Save Pet in the database
  Pet.create(pet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pet."
      });
    });
};

exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.like]: `%${fullName}%` } } : null;

  Pet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pets."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Pet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pet with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  Pet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pet with id=${id}. Maybe Pet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pet with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Pet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pet was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Pet with id=${id}. Maybe Pet was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pet with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Pet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all pets."
      });
    });
  
};

exports.findAllPublished = (req, res) => {
  Pet.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving pets."
    });
  });
  
};