const db = require("../models");
const Talent = db.talent;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.fullName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const talent = {
    fullName: req.body.fullName,
    buff: req.body.buff,
    linkImage: req.body.linkImage,
  };

  // Save Talent in the database
  Talent.create(talent)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Talent."
      });
    });
};

exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.like]: `%${fullName}%` } } : null;

  Talent.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving talents."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Talent.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Talent with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  Talent.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Talent was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Talent with id=${id}. Maybe Talent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Talent with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Talent.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Talent was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Talent with id=${id}. Maybe Talent was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Talent with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Talent.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all talents."
      });
    });
  
};

exports.findAllPublished = (req, res) => {
  Talent.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving talents."
    });
  });
  
};