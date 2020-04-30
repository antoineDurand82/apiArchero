'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 10; i++) {
      await db.ring.create({level: 10})
    }
  },

  down: async (queryInterface, Sequelize) => {
    const rings = await db.ring.findAll()
    for (let i = 0; i < rings.length; i++) {
      const ring = rings[i];
      await ring.destroy({force: true})
    }
  }
};
