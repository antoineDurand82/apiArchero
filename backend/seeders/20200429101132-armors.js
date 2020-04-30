'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 10; i++) {
      await db.armor.create({level: 10})
    }
  },

  down: async (queryInterface, Sequelize) => {
    const armors = await db.armor.findAll()
    for (let i = 0; i < armors.length; i++) {
      const armor = armors[i];
      await armor.destroy({force: true})
    }
  }
};
