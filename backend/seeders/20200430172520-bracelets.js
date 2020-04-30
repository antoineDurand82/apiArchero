'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 10; i++) {
      await db.bracelet.create({level: 10})
    }
  },

  down: async (queryInterface, Sequelize) => {
    const bracelets = await db.bracelet.findAll()
    for (let i = 0; i < bracelets.length; i++) {
      const bracelet = bracelets[i];
      await bracelet.destroy({force: true})
    }
  }
};
