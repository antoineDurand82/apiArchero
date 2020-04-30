'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 10; i++) {
      await db.hero.create({level: 10})
    }
  },

  down: async (queryInterface, Sequelize) => {
    const heroes = await db.hero.findAll()
    for (let i = 0; i < heroes.length; i++) {
      const hero = heroes[i];
      await hero.destroy({force: true})
    }
  }
};
