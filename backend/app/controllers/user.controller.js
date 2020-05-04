const db = require("../models");
const User = db.user;


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
      for (let i = 0; i < req.body.armors.length; i++) {
        const armor = req.body.armors[i];
        await createdUser.addArmor(armor.armorId, {through: {level: armor.level, rarity: armor.rarity}})
      }
    };
    if (Array.isArray(req.body.bracelets)) {
      for (let i = 0; i < req.body.bracelets.length; i++) {
        const bracelet = req.body.bracelets[i];
        await createdUser.addBracelet(bracelet.braceletId, {through: {level: bracelet.level, rarity: bracelet.rarity}})
      }
    };
    if (Array.isArray(req.body.heroes)) {
      for (let i = 0; i < req.body.heroes.length; i++) {
        const hero = req.body.heroes[i];
        await createdUser.addHero(hero.heroId, {through: {level: hero.level}})
      }
    };
    if (Array.isArray(req.body.lockets)) {
      for (let i = 0; i < req.body.lockets.length; i++) {
        const locket = req.body.lockets[i];
        await createdUser.addLocket(locket.locketId, {through: {level: locket.level, rarity: locket.rarity}})
      }
    };
    if (Array.isArray(req.body.pets)) {
      for (let i = 0; i < req.body.pets.length; i++) {
        const pet = req.body.pets[i];
        await createdUser.addPet(pet.petId, {through: {level: pet.level, rarity: pet.rarity}})
      }
    };
    if (Array.isArray(req.body.rings)) {
      for (let i = 0; i < req.body.rings.length; i++) {
        const ring = req.body.rings[i];
        await createdUser.addRing(ring.ringId, {through: {level: ring.level, rarity: ring.rarity}})
      }
    };
    if (Array.isArray(req.body.talents)) {
      for (let i = 0; i < req.body.talents.length; i++) {
        const talent = req.body.talents[i];
        await createdUser.addTalent(talent.talentId, {through: {level: talent.level}})
      }
    };
    if (Array.isArray(req.body.weapons)) {
      for (let i = 0; i < req.body.weapons.length; i++) {
        const weapon = req.body.weapons[i];
        await createdUser.addWeapon(weapon.weaponId, {through: {level: weapon.level, rarity: weapon.rarity}})
      }
    };
    
    res.status(200).send(createdUser)
    
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the User."})
  }
};



exports.findAll = (req, res) => {
  User.findAll()
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

exports.update = async (req, res) => {
  const id = req.params.id;
  try { 
    await User.update(req.body, {where: { id: id }})
    const updatedUser = await User.findByPk(id)
    await updatedUser.setArmors([])
    await updatedUser.setBracelets([])
    await updatedUser.setHeros([])
    await updatedUser.setLockets([])
    await updatedUser.setPets([])
    await updatedUser.setRings([])
    await updatedUser.setTalents([])
    await updatedUser.setWeapons([])
    if (Array.isArray(req.body.armors)) {
      for (let i = 0; i < req.body.armors.length; i++) {
        const armor = req.body.armors[i];
        await updatedUser.addArmor(armor.armorId, {through: {level: armor.level, rarity: armor.rarity}})
      }
    };
    if (Array.isArray(req.body.bracelets)) {
      for (let i = 0; i < req.body.bracelets.length; i++) {
        const bracelet = req.body.bracelets[i];
        await updatedUser.addBracelet(bracelet.braceletId, {through: {level: bracelet.level, rarity: bracelet.rarity}})
      }
    };
    if (Array.isArray(req.body.heroes)) {
      for (let i = 0; i < req.body.heroes.length; i++) {
        const hero = req.body.heroes[i];
        await updatedUser.addHero(hero.heroId, {through: {level: hero.level}})
      }
    };
    if (Array.isArray(req.body.lockets)) {
      for (let i = 0; i < req.body.lockets.length; i++) {
        const locket = req.body.lockets[i];
        await updatedUser.addLocket(locket.locketId, {through: {level: locket.level, rarity: locket.rarity}})
      }
    };
    if (Array.isArray(req.body.pets)) {
      for (let i = 0; i < req.body.pets.length; i++) {
        const pet = req.body.pets[i];
        await updatedUser.addPet(pet.petId, {through: {level: pet.level, rarity: pet.rarity}})
      }
    };
    if (Array.isArray(req.body.rings)) {
      for (let i = 0; i < req.body.rings.length; i++) {
        const ring = req.body.rings[i];
        await updatedUser.addRing(ring.ringId, {through: {level: ring.level, rarity: ring.rarity}})
      }
    };
    if (Array.isArray(req.body.talents)) {
      for (let i = 0; i < req.body.talents.length; i++) {
        const talent = req.body.talents[i];
        await updatedUser.addTalent(talent.talentId, {through: {level: talent.level}})
      }
    };
    if (Array.isArray(req.body.weapons)) {
      for (let i = 0; i < req.body.weapons.length; i++) {
        const weapon = req.body.weapons[i];
        await updatedUser.addWeapon(weapon.weaponId, {through: {level: weapon.level, rarity: weapon.rarity}})
      }
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