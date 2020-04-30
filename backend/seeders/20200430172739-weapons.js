'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 10; i++) {
      await db.weapon.create({level: 10})
    }
  },

  down: async (queryInterface, Sequelize) => {
    const weapons = await db.weapon.findAll()
    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      await weapon.destroy({force: true})
    }
  }
};
