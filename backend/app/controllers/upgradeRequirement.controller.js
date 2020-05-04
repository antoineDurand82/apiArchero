const db = require("../models");
const UpgradeRequirement = db.upgradeRequirement;


exports.create = (req, res) => {

  // Create a UpgradeRequirement
  const upgradeRequirement = {
    level: req.body.level,
    gold: req.body.gold,
    scrolls: req.body.scrolls,
    cumGold: req.body.cumGold,
    cumScrolls: req.body.cumScrolls,
  };

  // Save UpgradeRequirement in the database
  UpgradeRequirement.create(upgradeRequirement)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UpgradeRequirement."
      });
    });
};

exports.findAll = (req, res) => {
    UpgradeRequirement.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving upgradeRequirements."
        });
      });
  };

exports.findOne = (req, res) => {
  const id = req.params.id;

  UpgradeRequirement.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving UpgradeRequirement with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;

  UpgradeRequirement.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UpgradeRequirement was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update UpgradeRequirement with id=${id}. Maybe UpgradeRequirement was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating UpgradeRequirement with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  UpgradeRequirement.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UpgradeRequirement was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete UpgradeRequirement with id=${id}. Maybe UpgradeRequirement was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete UpgradeRequirement with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  UpgradeRequirement.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all upgradeRequirements."
      });
    });
  
};