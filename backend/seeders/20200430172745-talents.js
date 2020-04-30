'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 10; i++) {
      await db.talent.create({level: 10})
    }
  },

  down: async (queryInterface, Sequelize) => {
    const talents = await db.talent.findAll()
    for (let i = 0; i < talents.length; i++) {
      const talent = talents[i];
      await talent.destroy({force: true})
    }
  }
};
