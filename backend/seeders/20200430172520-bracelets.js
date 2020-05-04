'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.bracelet.create({fullName: "Blazing Bracelet", attack: 30, commonBuff: "Burns 2 enemies for 1.8s", rareBuff: "Burns 2 enemies for 2s", epicBuff: "Burns 3 enemies for 2.2s", perfectEpicBuff: "Burns 3 enemies for 2.4s", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/bracelets/Braceletscrollr.png"})
    await db.bracelet.create({fullName: "Frozen Bracelet", attack: 30, commonBuff: "Randomly freezes 2-4 enemies for 1.5s", rareBuff: "Randomly freezes 2-4 enemies for 1.5s", epicBuff: "Randomly freezes 3-5 enemies for 2.2s", perfectEpicBuff: "Randomly freezes 4-6 enemies for 2.2s", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/bracelets/Braceletscrollr.png"})
    await db.bracelet.create({fullName: "Split Bracelet", attack: 30, commonBuff: "Summons 1 copy to help battle, lasting 4s", rareBuff: "Summons 1 copy to help battle, lasting 6s", epicBuff: "Summons 1 copy to help battle, lasting 7s", perfectEpicBuff: "Summons 1 copy to help battle, lasting 8s", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/bracelets/Braceletscrollr.png"})
    await db.bracelet.create({fullName: "Thunder Bracelet", attack: 30, commonBuff: "Deals 2-5 times random Lightning damage to nearby enemies; damage is random too", rareBuff: "Deals 4-7 times random Lightning damage to nearby enemies; damage is random too", epicBuff: "Deals 5-8 times random Lightning damage to nearby enemies; damage is random too", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/bracelets/Braceletscrollr.png"})
  },

  down: async (queryInterface, Sequelize) => {
    const bracelets = await db.bracelet.findAll()
    for (let i = 0; i < bracelets.length; i++) {
      const bracelet = bracelets[i];
      await bracelet.destroy({force: true})
    }
  }
};
