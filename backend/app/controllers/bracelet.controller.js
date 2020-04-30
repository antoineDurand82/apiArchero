const db = require("../models");
const Bracelet = db.bracelet;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.fullName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const bracelet = {
    fullName: req.body.fullName,
    attack: req.body.attack,
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

  // Save Bracelet in the database
  Bracelet.create(bracelet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bracelet."
      });
    });
};

exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.like]: `%${fullName}%` } } : null;

  Bracelet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bracelets."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Bracelet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Bracelet with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  Bracelet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bracelet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Bracelet with id=${id}. Maybe Bracelet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bracelet with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Bracelet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bracelet was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Bracelet with id=${id}. Maybe Bracelet was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bracelet with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Bracelet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bracelets."
      });
    });
  
};

exports.findAllPublished = (req, res) => {
  Bracelet.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving bracelets."
    });
  });
  
};