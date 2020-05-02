const db = require("../models");
const Hero = db.hero;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.fullName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const hero = {
    fullName: req.body.fullName,
    attack: req.body.attack,
    maxHp: req.body.maxHp,
    firstBuff: req.body.firstBuff,
    secondBuff: req.body.secondBuff,
    thirdBuff: req.body.thirdBuff,
    fourthBuff: req.body.fourthBuff,
    linkImage: req.body.linkImage,
  };

  // Save Hero in the database
  Hero.create(hero)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Hero."
      });
    });
};

exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.like]: `%${fullName}%` } } : null;

  Hero.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving heroes."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Hero.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Hero with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  Hero.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Hero was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Hero with id=${id}. Maybe Hero was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Hero with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Hero.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Hero was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Hero with id=${id}. Maybe Hero was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Hero with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  Hero.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all heroes."
      });
    });
  
};

exports.findAllPublished = (req, res) => {
  Hero.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving heroes."
    });
  });
  
};