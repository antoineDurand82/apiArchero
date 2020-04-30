const db = require("../models");
const Ring = db.ring;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.fullName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const ring = {
    fullName: req.body.fullName,
    ringBuff: req.body.ringBuff,
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

  // Save Ring in the database
  Ring.create(ring)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ring."
      });
    });
};

exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.like]: `%${fullName}%` } } : null;

  Ring.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rings."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Ring.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Ring with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  Ring.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ring was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Ring with id=${id}. Maybe Ring was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Ring with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Ring.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ring was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Ring with id=${id}. Maybe Ring was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Ring with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Ring.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all rings."
      });
    });
  
};

exports.findAllPublished = (req, res) => {
  Ring.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving rings."
    });
  });
  
};