'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.talent.create({fullName: "Recover", buff: "Increases the HP you recover from Red Hearts", linkImage: "/images/talents/Recover.png"})
    await db.talent.create({fullName: "Power", buff: "Increases your damage", linkImage: "/images/talents/Power.png"})
    await db.talent.create({fullName: "Strength", buff: "Increases your Health Points", linkImage: "/images/talents/Strength.png"})
    await db.talent.create({fullName: "Iron Bulwark", buff: "Reduces the damage you take from touching monsters", linkImage: "/images/talents/IronBulwark.png"})
    await db.talent.create({fullName: "Agile", buff: "Increases your attack speed", linkImage: "/images/talents/Agile.png"})
    await db.talent.create({fullName: "Enhance Equipment", buff: "Boosts your equipment effects", linkImage: "/images/talents/EnhanceEquipment.png"})
  },

  down: async (queryInterface, Sequelize) => {
    const talents = await db.talent.findAll()
    for (let i = 0; i < talents.length; i++) {
      const talent = talents[i];
      await talent.destroy({force: true})
    }
  }
};
