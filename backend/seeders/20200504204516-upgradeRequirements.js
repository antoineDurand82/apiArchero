'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await db.upgradeRequirement.create({level: 1, gold: 200, scrolls: 1, cumGold: 200, cumScrolls: 1})
    await db.upgradeRequirement.create({level: 2, gold: 400, scrolls: 2, cumGold: 600, cumScrolls: 3})
    await db.upgradeRequirement.create({level: 3, gold: 600, scrolls: 4, cumGold: 1200, cumScrolls: 7})
    await db.upgradeRequirement.create({level: 4, gold: 800, scrolls: 6, cumGold: 2000, cumScrolls: 13})
    await db.upgradeRequirement.create({level: 5, gold: 1000, scrolls: 8, cumGold: 3000, cumScrolls: 21})
    await db.upgradeRequirement.create({level: 6, gold: 1200, scrolls: 10, cumGold: 4200, cumScrolls: 31})
    await db.upgradeRequirement.create({level: 7, gold: 1400, scrolls: 10, cumGold: 5600, cumScrolls: 41})
    await db.upgradeRequirement.create({level: 8, gold: 1600, scrolls: 10, cumGold: 7200, cumScrolls: 51})
    await db.upgradeRequirement.create({level: 9, gold: 1800, scrolls: 10, cumGold: 9000, cumScrolls: 61})
    await db.upgradeRequirement.create({level: 10, gold: 2000, scrolls: 15, cumGold: 11000, cumScrolls: 76})
  },

  down: async (queryInterface, Sequelize) => {
    const upgradeRequirements = await db.upgradeRequirement.findAll()
    for (let i = 0; i < upgradeRequirements.length; i++) {
      const upgradeRequirement = upgradeRequirements[i];
      await upgradeRequirement.destroy({force: true})
    }
  }
};
