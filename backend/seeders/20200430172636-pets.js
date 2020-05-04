'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.pet.create({fullName: "Elf", commonBuff: "", rareBuff: "+20% Crit rate", epicBuff: "+10% Damage", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/pets/Elf.png"})
    await db.pet.create({fullName: "Living Bomb", commonBuff: "", rareBuff: "+20% Crit rate", epicBuff: "+10% Damage", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/pets/LivingBomb.png"})
    await db.pet.create({fullName: "Scythe Mage", commonBuff: "", rareBuff: "+20% Crit rate", epicBuff: "+10% Damage", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/pets/ScytheMage.png"})
    await db.pet.create({fullName: "Laser Bat", commonBuff: "", rareBuff: "+20% Crit rate", epicBuff: "+10% Damage", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/pets/LaserBat.png"})
  },

  down: async (queryInterface, Sequelize) => {
    const pets = await db.pet.findAll()
    for (let i = 0; i < pets.length; i++) {
      const pet = pets[i];
      await pet.destroy({force: true})
    }
  }
};
