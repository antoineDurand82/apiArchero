'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.ring.create({fullName: "Bear Ring", ringBuff: "Increases HP and damage to ground units", commonBuff: "", rareBuff: "+5% HP", epicBuff: "+10% Coins from battle", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/rings/BearRing.jpg"})
    await db.ring.create({fullName: "Wolf Ring", ringBuff: "Increases damage to melee units and critical chance", commonBuff: "", rareBuff: "+5% Critical rate", epicBuff: "+10% Coins from battle", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/rings/WolfRing.jpg"})
    await db.ring.create({fullName: "Falcon Ring", ringBuff: "Increases damage to flying units and attack speed", commonBuff: "", rareBuff: "+5% Attack speed", epicBuff: "+10% Coins from battle", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/rings/FalconRing.jpg"})
    await db.ring.create({fullName: "Serpent Ring", ringBuff: "Increases damage to ranged units and dodge chance", commonBuff: "", rareBuff: "+7% Dodge rate", epicBuff: "+10% Coins from battle", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/rings/SerpentRing.png"})
  },

  down: async (queryInterface, Sequelize) => {
    const rings = await db.ring.findAll()
    for (let i = 0; i < rings.length; i++) {
      const ring = rings[i];
      await ring.destroy({force: true})
    }
  }
};
