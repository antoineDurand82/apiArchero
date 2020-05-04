const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;


exports.create = async (req, res) => {

  // Create a User
  const user = {
    id: req.body.id,
    maxHp: req.body.maxHp,
    attack: req.body.attack,
    attackSpeed: req.body.attackSpeed,
    dodgeRate: req.body.dodgeRate,
    damageResistance: req.body.damageResistance,
    healingRedHearts: req.body.healingRedHearts,
    projectileResistance: req.body.projectileResistance,
    collisionResistance: req.body.collisionResistance,
    coinsDropped: req.body.coinsDropped,
    criticalDamageChance: req.body.criticalDamageChance,
    criticalDamage: req.body.criticalDamage,
    angelDoubleHealingChance: req.body.angelDoubleHealingChance
  };



  // Save User in the database

  try {
    const createdUser =  await User.create(user)
    if (Array.isArray(req.body.armors)) {
      req.body.armors.forEach(armor => {
        user.addArmor(armor.armorId, {through: {level: armor.level, rarity: armor.rarity}})
      });
    };
    if (Array.isArray(req.body.bracelets)) {
      req.body.bracelets.forEach(bracelet => {
        user.addBracelet(bracelet.braceletId, {through: {level: bracelet.level, rarity: bracelet.rarity}})
      });
    };
    if (Array.isArray(req.body.heroes)) {
      req.body.heroes.forEach(hero => {
        user.addHero(hero.heroId, {through: {level: hero.level}})
      });
    };
    if (Array.isArray(req.body.lockets)) {
      req.body.lockets.forEach(locket => {
        user.addLocket(locket.locketId, {through: {level: locket.level, rarity: locket.rarity}})
      });
    };
    if (Array.isArray(req.body.pets)) {
      req.body.pets.forEach(pet => {
        user.addPet(pet.petId, {through: {level: pet.level, rarity: pet.rarity}})
      });
    };
    if (Array.isArray(req.body.rings)) {
      req.body.rings.forEach(ring => {
        user.addRing(ring.ringId, {through: {level: ring.level, rarity: ring.rarity}})
      });
    };
    if (Array.isArray(req.body.talents)) {
      req.body.talents.forEach(talent => {
        user.addTalent(talent.talentId, {through: {level: talent.level}})
      });
    };
    if (Array.isArray(req.body.weapons)) {
      req.body.weapons.forEach(weapon => {
        user.addWeapon(weapon.weaponId, {through: {level: weapon.level, rarity: weapon.rarity}})
      });
    };
    
    res.status(200).send(createdUser)
    
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the User."})
  }


  
};



exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
  
};

exports.update = (req, res) => {
  const id = req.params.id;
  try { 
    const updatedUser = await User.update(req.body, {where: { id: id }})
    user.setArmors([])
    user.setBracelets([])
    user.setHeroes([])
    user.setLockets([])
    user.setPets([])
    user.setRings([])
    user.setTalents([])
    user.setWeapons([])
    if (Array.isArray(req.body.armors)) {
      req.body.armors.forEach(armor => {
        user.addArmor(armor.armorId, {through: {level: armor.level, rarity: armor.rarity}})
      });
    };
    if (Array.isArray(req.body.bracelets)) {
      req.body.bracelets.forEach(bracelet => {
        user.addBracelet(bracelet.braceletId, {through: {level: bracelet.level, rarity: bracelet.rarity}})
      });
    };
    if (Array.isArray(req.body.heroes)) {
      req.body.heroes.forEach(hero => {
        user.addHero(hero.heroId, {through: {level: hero.level}})
      });
    };
    if (Array.isArray(req.body.lockets)) {
      req.body.lockets.forEach(locket => {
        user.addLocket(locket.locketId, {through: {level: locket.level, rarity: locket.rarity}})
      });
    };
    if (Array.isArray(req.body.pets)) {
      req.body.pets.forEach(pet => {
        user.addPet(pet.petId, {through: {level: pet.level, rarity: pet.rarity}})
      });
    };
    if (Array.isArray(req.body.rings)) {
      req.body.rings.forEach(ring => {
        user.addRing(ring.ringId, {through: {level: ring.level, rarity: ring.rarity}})
      });
    };
    if (Array.isArray(req.body.talents)) {
      req.body.talents.forEach(talent => {
        user.addTalent(talent.talentId, {through: {level: talent.level}})
      });
    };
    if (Array.isArray(req.body.weapons)) {
      req.body.weapons.forEach(weapon => {
        user.addWeapon(weapon.weaponId, {through: {level: weapon.level, rarity: weapon.rarity}})
      });
    };
    res.status(200).send(updatedUser)
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Error updating User with id=" + id
    });
  }
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
  
};

exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Amors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
  
};

exports.findAllPublished = (req, res) => {
  User.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving users."
    });
  });
  
};