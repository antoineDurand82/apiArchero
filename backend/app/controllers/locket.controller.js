const db = require("../models");
const Lockets = db.locket;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.fullName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Locket
  const locket = {
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

  // Save Lockets in the database
  Locket.create(locket)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Lockets."
      });
    });
};

exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.like]: `%${fullName}%` } } : null;

  Lockets.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lockets."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Lockets.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Lockets with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  Lockets.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Lockets was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Lockets with id=${id}. Maybe Lockets was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Lockets with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Lockets.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Lockets was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Lockets with id=${id}. Maybe Lockets was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Lockets with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Lockets.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all lockets."
      });
    });
  
};